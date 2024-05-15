import { useState } from 'react';
import { GetData } from './CharactersData';
import './App.css';

const EMPTY_CHARACTER = -1;
const DEFAULT_SPEED = 100;
const TEAM_SIZE = 4;

function App() {  
  const characterData = GetData();

  const [team, setTeam] = useState(Array(TEAM_SIZE).fill(EMPTY_CHARACTER));
  const [lastPosition, setLastPosition] = useState(0);
  const [speedValues, setSpeedValues] = useState(Array(TEAM_SIZE).fill(DEFAULT_SPEED));
  const [cycles, setCycles] = useState(5);
  const [turns, setTurns] = useState([]);  

  function Calculate(speedValues, cycles) {
    let calculatedTurns = [];
    let avs = [];
    for (let i = 0; i < speedValues.length; i++) {
      const speed = speedValues[i];
      avs.push({av: getAV(speed), id: i + 1});
    }    
    // console.log(avs);
    // console.log(cycles);

    for (let i = 0; i < TEAM_SIZE; i++) {
      const av = Number(avs[i].av);
      const character = team[i];
      let currentAV = av;
      let cycle = currentAV < 50 ? 0 :( Math.floor((currentAV - 50) / 100));
      // console.log(currentAV, cycle);
      while (cycle < cycles) {
        calculatedTurns.push({av: currentAV, id: character});
        currentAV += av;
        cycle = currentAV < 50 ? 0 :( Math.floor((currentAV - 50) / 100));
      }
    }
    
    // console.log();
    calculatedTurns.sort((a, b) => a.av - b.av);
    setTurns(calculatedTurns);
  }

  //onCharacterClick={() => SelectCharacterSpace(i)}
  // function SelectCharacterSpace(characterId) {
  //   console.log(characterId, team[characterId]);
  // }
  function SelectCharacter(characterData, selected, setSelected, index) {
    console.log(selected, characterData);
    if(!selected && lastPosition >= TEAM_SIZE) return; //all teamslots filled
    if (!selected) {
      let newTeam = [...team];
      newTeam[lastPosition] = characterData;
      let newSpeed = [...speedValues]
      newSpeed[lastPosition] = characterData["base_speed"];
      let newPosition = TEAM_SIZE;
      for (let i = 0; i < TEAM_SIZE; i++) {
        if (newTeam[i] === EMPTY_CHARACTER) {
          newPosition = i;
          break;
        }
      }
      setSpeedValues(newSpeed);
      setTeam(newTeam);
      setLastPosition(newPosition);
      setSelected(!selected);
    } else if (selected) {
      console.log('selected');
      let position = 4;
      for (let i = 0; i < TEAM_SIZE; i++) {
        if (team[i] === characterData) {
          position = i;
          break;
        }
      }
      if (position < lastPosition) setLastPosition(position);
      let newTeam = [...team];
      newTeam[position] = EMPTY_CHARACTER;
      let newSpeed = [...speedValues]
      newSpeed[position] = DEFAULT_SPEED;
      setSpeedValues(newSpeed);
      setTeam(newTeam);
      setSelected(!selected);
    }
    // setLastPosition(lastPosition)
  }

  let characterComponents = [];
  for (let i = 0; i < TEAM_SIZE; i++) {
    function setSpeed(speed) {
      let newSpeed = [...speedValues];
      newSpeed[i] = speed;
      setSpeedValues(newSpeed);
    }
    characterComponents.push(<CharacterData index={i} speed={speedValues[i]} setSpeed={setSpeed} character={team[i]}/>);
  }

  function Clear() {
    //todo: clear data in character listing
    setLastPosition(0);
    setTeam(Array(TEAM_SIZE).fill(EMPTY_CHARACTER));
  }

  return (              
        <>    
          <div className="input-data">        
            <div className='team-data'>
              {characterComponents}
            </div>
            <div className='other-data'>
              <CyclesData cycles={cycles} setCycles={setCycles}/>
              <button className='calculate-btn' onClick={() => Calculate(speedValues, cycles)}>Calculate</button>
            </div>
          </div>
          <button className='clear-btn' onClick={Clear}>Clear</button>
          <CharacterSelector characterData={characterData} onCharacterClick={SelectCharacter}/>
          <Timeline turns={turns} cycles={cycles}/>
        </>
    );
}

function CharacterSelector({characterData, onCharacterClick}) {
  // const deselected = -1;
  // const [selectionState, setSelectionState] = useState(Array(characterData.length).fill(deselected))
    // console.log("character data:");
    // console.log(characterData);
  let characters = [];
  for (let i = 0; i < characterData.length; i++) {
    const character = characterData[i];
    characters.push(<CharacterListing key={character.name} index={i} data={character} onCharacterClick={onCharacterClick}/>);
  }
  return (
    <div className='character-selector'>
      {characters}
    </div>
  )
}

function CharacterListing({ data, onCharacterClick, index }) {
  const [selected, setSelected] = useState(false);
  return (
    <div className={selected ? 'listing-border' : 'listing-borderless'}>
      <img className='character-icon' src={process.env.PUBLIC_URL + data.icon} alt={data.name} onClick={() => onCharacterClick(data, selected, setSelected, index)}/>
    </div>
  )
}

function getAV(speed) {
  return (10000 / speed).toFixed(2);
}

function CharacterData({ character, speed, setSpeed, index }) {
  return (
      <div className='character-data'>
        {/* <div className='character-icon'>{getIcon(character)}</div> */}
        <img className='character-icon' src={process.env.PUBLIC_URL + (character === EMPTY_CHARACTER ? "icons/blank.png" : character.icon)} alt='empty-icon'/>
        <input id={'speed-input' + index} className='speed-input' value={speed} onChange={(e) => setSpeed(e.target.value)}/>
      </div>
  )
}

function CyclesData({cycles, setCycles}) {
  return (
    <div className='cycle-data'>
      <label htmlFor='cycle-input'>Cycles:</label>
      <input id='cycle-input' className='cycle-input' value={cycles} onChange={(e) => setCycles(e.target.value)}></input>
    </div>
  )
}

function Timeline({ turns, cycles, team}) {
  // let timeline = [<CycleDivider key={0} turnNumber='1'/>, <TurnData key={1} character='1' actionValue={63}/>, 
  //     <CycleDivider key={2} turnNumber='2'/>];
  let timeline = [];
  
  let currentTurn = 0;
  for (let i = 0; i < cycles; i++) {
    if (currentTurn >= turns.length) break;
    timeline.push(<CycleDivider key={'cycle'+i} turnNumber={i}/>);
    let lastAV = (i + 1) * 100 + 50;
    // console.log(lastAV);
    while (currentTurn < turns.length && turns[currentTurn].av < lastAV) {
      timeline.push(<TurnData key={"turn"+currentTurn} character={turns[currentTurn].id} actionValue={turns[currentTurn].av.toFixed(2)}/>);
      currentTurn++;
    }    
  }

  return (
    <div className='timeline'>
      {timeline}
    </div>
  )
}

function TurnData({ character, actionValue }) { //character icon + turn value
  console.log(character);
  if (character === -1) return (<></>);
  return (
    <>
      {/* <div className='turn-data'>{character}</div> */}
      <img className='turn-data' src={character.icon} alt={character.name}/>
      <div className='action-value'> {actionValue} </div>
    </>
  )
}

function CycleDivider({ turnNumber }) {
  return (
    <>
      <p>Cycle {turnNumber}</p>
      <hr/>
    </>
  )
}

export default App;
