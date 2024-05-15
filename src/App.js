import { useState } from 'react';
import { GetData } from './CharactersData';
import { CharacterSelector } from './CharacterSelector';
import { Timeline } from './Timeline';
import { ConstantsList } from './Constants';
import {TeamData} from './TeamData'
import './App.css';

function App() {  
  const characterData = GetData();

  const [team, setTeam] = useState(Array(ConstantsList.TEAM_SIZE).fill(ConstantsList.EMPTY_CHARACTER));
  const [speedValues, setSpeedValues] = useState(Array(ConstantsList.TEAM_SIZE).fill(ConstantsList.DEFAULT_SPEED));
  const [cycles, setCycles] = useState(5);
  const [turns, setTurns] = useState([]);  

  return (              
        <>
          <TeamData speedValues={speedValues} setSpeedValues={setSpeedValues} cycles={cycles} setCycles={setCycles} team={team} setTurns={setTurns} />
          <CharacterSelector characterData={characterData} team={team} setTeam={setTeam} speedValues={speedValues} setSpeedValues={setSpeedValues}/>
          <Timeline turns={turns} cycles={cycles} team={team} speedValues={speedValues} setTurns={setTurns} />
        </>
    );
}

export default App;