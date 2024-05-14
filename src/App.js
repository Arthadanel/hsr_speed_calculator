import { useState } from 'react';
import { GetData } from './CharactersData';
import './App.css';

function App() {
  
  // const [characterData, setCharacterData] = useState([]);
  const characterData = GetData();
  // const [loading, setLoading] = useState('idle');
  // const [error, setError] = useState(false);

  // useEffect(() => {
  //       setLoading('loading');
  //           fetch('./character_data.json')
  //           .then((response) => {
  //               console.log(response);
  //               setLoading('loaded');
  //               setCharacterData(response.json());
  //           })
  //           .catch((err) => {
  //               console.error('Error:', err);
  //               setLoading('error');
  //               setError(err);
  //           });
  //   }, []);

  

  const defaultSpeed = 100;
  const characterCount = 4;
  const [speedValues, setSpeedValues] = useState(Array(characterCount).fill(defaultSpeed));
  const [cycles, setCycles] = useState(5);
  const [turns, setTurns] = useState([]);
  

  function Calculate(speedValues, cycles) {
    let calculatedTurns = [];
    let avs = [];
    for (let i = 0; i < speedValues.length; i++) {
      const speed = speedValues[i];
      avs.push({av: getAV(speed), id: i + 1});
    }    
    console.log(avs);
    console.log(cycles);

    for (let i = 0; i < characterCount; i++) {
      const av = Number(avs[i].av);
      const character = avs[i].id;
      let currentAV = av;
      let cycle = currentAV < 50 ? 0 :( Math.floor((currentAV - 50) / 100));
      console.log(currentAV, cycle);
      while (cycle < cycles) {
        calculatedTurns.push({av: currentAV, id: character});
        currentAV += av;
        cycle = currentAV < 50 ? 0 :( Math.floor((currentAV - 50) / 100));
      }
    }
    
    console.log(calculatedTurns.sort((a, b) => a.av - b.av));
    setTurns(calculatedTurns);
  }

  let characterComponents = [];
  for (let i = 0; i < characterCount; i++) {
    function setSpeed(speed) {
      let newSpeed = [...speedValues];
      newSpeed[i] = speed;
      setSpeedValues(newSpeed);
    }
    characterComponents.push(<CharacterData key={i + 1} speed={speedValues[i]} setSpeed={setSpeed} character={i + 1} />);
  }

  // if(loading === 'loaded') {
  //   setLoading('displyed');
  // }

  // if (error)
  //   return (
  //       <h1>
  //           {error.toString()}
  //       </h1>
  //   )
  return (
    // <div>
    //   {loading === 'loading' ? (
    //       <h1>Loading...</h1>
    //   ) : (                  
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
          <CharacterSelector characterData={characterData}/>
          <Timeline turns={turns} cycles={cycles}/>
        </>
      // )}
      // </div>
    );
}

function CharacterSelector({characterData}) {
    console.log("character data:");
    console.log(characterData);
    console.log(characterData.length);
  let characters = [];
  for (let i = 0; i < characterData.length; i++) {
    const character = characterData[i];
    console.log(character);
    characters.push(<CharacterListing key={character.name} data={character}/>);
  }
  return (
    <div className='character-selector'>
      {characters}
    </div>
  )
}

function CharacterListing({ data }) {
  return (
    <img className='character-icon' src={process.env.PUBLIC_URL + data.icon} alt={data.name}/>
  )
}

function getAV(speed) {
  return (10000 / speed).toFixed(2);
}

// function getIcon(character) {
  // let icon_url = fetch("/character_data.json")
  //   .then(response => response.json())
  //   .then(json => {return json ? 
  //     <img src={process.env.PUBLIC_URL + icon_url} alt='acheron-icon'/> : 
  //     character});
//   return <img src={process.env.PUBLIC_URL + "icons/Character_Acheron_Icon.webp"} alt='acheron-icon'/>;
// }

function CharacterData({ character, speed, setSpeed }) {
  return (
    <div className='character-data'>
      {/* <div className='character-icon'>{getIcon(character)}</div> */}
      <img className='character-icon' src={process.env.PUBLIC_URL + "icons/blank.png"} alt='empty-icon'/>
      <input id={'speed-input'+character} className='speed-input' value={speed} onChange={(e) => setSpeed(e.target.value)}/>
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

function Timeline({ turns, cycles}) {
  // let timeline = [<CycleDivider key={0} turnNumber='1'/>, <TurnData key={1} character='1' actionValue={63}/>, 
  //     <CycleDivider key={2} turnNumber='2'/>];
  let timeline = [];
  
  let currentTurn = 0;
  for (let i = 0; i < cycles; i++) {
    if (currentTurn >= turns.length) break;
    timeline.push(<CycleDivider key={'cycle'+i} turnNumber={i}/>);
    let lastAV = (i + 1) * 100 + 50;
    console.log(lastAV);
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
  return (
    <>
      <div className='turn-data'>{character}</div>
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
