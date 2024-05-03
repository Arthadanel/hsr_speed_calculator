import { useState } from 'react';
import './App.css';

function App() {
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

    let currentCycle = 0;

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

  return (
    <>    
      <div className="input-data">        
        <div className='team-data'>
          {characterComponents}
        </div>
        <CyclesData cycles={cycles} setCycles={setCycles}/>
      </div>
      <button className='calculate-btn' onClick={() => Calculate(speedValues, cycles)}>Calculate</button>
      <Timeline turns={turns} cycles={cycles}/>
    </>
  );
}

function getAV(speed) {
  return (10000 / speed).toFixed(2);
}

function CharacterData({ character, speed, setSpeed }) {
  return (
    <div className='character-data'>
      <div className='character-icon'>{character}</div>
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
