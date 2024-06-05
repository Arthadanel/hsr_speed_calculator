import { ConstantsList } from "./Constants";
import { useState } from 'react';
import Character from "./Character";

export function Timeline({ cycles, team, speedValues}) {    

  const [timeline, setTimeline] = useState([]);

  function Calculate(speedValues, cycles) {
    let turns = [];
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
        turns.push({av: currentAV, id: character});
        currentAV += av;
        cycle = currentAV < 50 ? 0 :( Math.floor((currentAV - 50) / 100));
      }
    }
    
    // console.log();
    turns.sort((a, b) => a.av - b.av);
    console.log(turns);

    let timelineUpd = [];

    let currentTurn = 0;
    for (let i = 0; i < cycles; i++) {
      if (currentTurn >= turns.length) break;
      timelineUpd.push(<CycleDivider key={'cycle'+i} turnNumber={i}/>);
      let lastAV = (i + 1) * 100 + 50;
      // console.log(lastAV);
      while (currentTurn < turns.length && turns[currentTurn].av < lastAV) {
        timelineUpd.push(<TurnData key={"turn"+currentTurn} character={turns[currentTurn].id} actionValue={turns[currentTurn].av.toFixed(2)}/>);
        currentTurn++;
      }    
    }

    setTimeline(timelineUpd);
  }  

  function ConstructTimeline(log, team) {
    let timeline = [];
    log.forEach(entry => {
      let entryData = entry.split(' ');
      switch (entryData[0]) {
        case "CYCLE":
          timeline.push(<CycleDivider key={'cycle' + entryData[1]} turnNumber={entryData[1]}/>);
          break;
        case "TURN":
          timeline.push(<TurnData key={"turn"+entryData[1]} character={team[entryData[2]]} actionValue={Number(entryData[3]).toFixed(2)}/>);
          break;
        default:
          break;
      }
    });
    return timeline; 
  }

  function Calculate2(team, speedValues, cycles) {
    let empty = true;
    team.forEach(element => { //check for empty team
      if(element !== ConstantsList.EMPTY_CHARACTER) empty = false;
    });
    if (empty) {
      setTimeline((<></>))
      return;
    }
    //preparation
    //log
    let log = [];
    let Log = (entry) => log.push(entry);

    let characters = [];
    for (let i = 0; i < ConstantsList.TEAM_SIZE; i++) {
      if(team[i] === ConstantsList.EMPTY_CHARACTER) continue;
      characters.push(new Character(i, team[i], speedValues[i], /**/ '010', 0, "0 TSTART"))  //last elements hardcoded for now
    }

    //cycle code
    let currentCycle = 0;
    let turnID = 0;
    while (currentCycle < cycles) {
      Log("CYCLE " + currentCycle);
      characters.sort((a, b) => a.av - b.av);
      let nextAV = 0;
      let cycleEnd = 50 + (currentCycle + 1) * 100;
      //character turn code
      while (nextAV < cycleEnd) { //todo wip
        let character = characters.shift();
        Log("TURN " + turnID + ' ' + character.id + ' ' +  character.av + ' ' + character.name);
        //START
        character.updateAV();

        //TURN

        //END
        //character.buffs.decreaseDuration();
        characters.push(character);
        nextAV = characters.sort((a, b) => a.av - b.av)[0].av;
        turnID++;
      }

      currentCycle++;
    }
    console.log(log);
    setTimeline(ConstructTimeline(log, team));
  }

  return (
    <>
        {/* <button className='calculate-btn' onClick={() => Calculate(speedValues, cycles)}>Calculate</button> */}
        <button className='calculate-btn' onClick={() => Calculate2(team, speedValues, cycles)}>Calculate</button>
        <div className='timeline'>
        {timeline}
        </div>
    </>
  )
}

function TurnData({ character, actionValue }) { //character icon + turn value\
  console.log("TD", character);
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