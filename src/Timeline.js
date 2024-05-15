import { ConstantsList } from "./Constants";

export function Timeline({ turns, cycles, team, speedValues, setTurns}) {
    
  function Calculate(speedValues, cycles) {
    let calculatedTurns = [];
    let avs = [];
    for (let i = 0; i < speedValues.length; i++) {
      const speed = speedValues[i];
      avs.push({av: getAV(speed), id: i + 1});
    }    
    // console.log(avs);
    // console.log(cycles);

    for (let i = 0; i < ConstantsList.TEAM_SIZE; i++) {
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
    <>
        <button className='calculate-btn' onClick={() => Calculate(speedValues, cycles)}>Calculate</button>          
        <div className='timeline'>
        {timeline}
        </div>
    </>
  )
}

function TurnData({ character, actionValue }) { //character icon + turn value
  console.log(character);
  if (character === -1) return (<></>);
  return (
    <>
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

function getAV(speed) {
  return (10000 / speed).toFixed(2);
}