import { useEffect, useState } from 'react';
import { GetData } from './CharactersData';
import { CharacterSelector } from './CharacterSelector';
import { Timeline } from './Timeline';
import { ConstantsList } from './Constants';
import {TeamData} from './TeamData'
import './App.css';

function App() {  
  const charactersData = GetData();
  console.log("STORAGE", localStorage);
  // localStorage.removeItem("team");
  // localStorage.clear();

  // const [team, setTeam] = useState(Array(ConstantsList.TEAM_SIZE).fill(ConstantsList.EMPTY_CHARACTER));
  if (!localStorage.getItem("team")) localStorage.setItem("team", Array(ConstantsList.TEAM_SIZE).fill(ConstantsList.EMPTY_CHARACTER).join(ConstantsList.SPLITTER));
  const [team, setTeam] = useState(localStorage.getItem("team").split(ConstantsList.SPLITTER).map((c) => Number(c) === ConstantsList.EMPTY_CHARACTER ? ConstantsList.EMPTY_CHARACTER : charactersData[Number(c)]));
  useEffect(() => {
    const team_arr = localStorage.getItem("team").split(ConstantsList.SPLITTER)
    .map((c) => Number(c) === ConstantsList.EMPTY_CHARACTER ? ConstantsList.EMPTY_CHARACTER : charactersData[Number(c)]);
    setTeam(team_arr ? team_arr : Array(ConstantsList.TEAM_SIZE).fill(ConstantsList.EMPTY_CHARACTER));
  }, []);
  useEffect(() => {
    const team_str = (team.map((c) => (Number(c) === ConstantsList.EMPTY_CHARACTER ? ConstantsList.EMPTY_CHARACTER : c.id))).join(ConstantsList.SPLITTER);
    localStorage.setItem('team', team_str);
  }, [team]);
  
  //const [speedValues, setSpeedValues] = useState(Array(ConstantsList.TEAM_SIZE).fill(ConstantsList.DEFAULT_SPEED));
  if (!localStorage.getItem("speedValues")) localStorage.setItem("speedValues", Array(ConstantsList.TEAM_SIZE).fill(ConstantsList.DEFAULT_SPEED).join(ConstantsList.SPLITTER));
  const [speedValues, setSpeedValues] = useState(localStorage.getItem("speedValues").split(ConstantsList.SPLITTER));
  useEffect(() => {
    const spd_arr = localStorage.getItem("speedValues").split(ConstantsList.SPLITTER);
    setSpeedValues(spd_arr ? spd_arr : Array(ConstantsList.TEAM_SIZE).fill(ConstantsList.DEFAULT_SPEED));
  }, []);
  useEffect(() => {
    const spd_str = speedValues.join(ConstantsList.SPLITTER);
    localStorage.setItem('speedValues', spd_str);
  }, [speedValues]);

  if (!localStorage.getItem('cycles')) localStorage.setItem('cycles', 5);
  const [cycles, setCycles] = useState(localStorage.getItem("cycles"));
  useEffect(() => {
    setCycles(Number(localStorage.getItem('cycles')));
  }, []);
  useEffect(() => {
    localStorage.setItem('cycles', cycles);
  }, [cycles]);

  return (
        <>
          <TeamData speedValues={speedValues} setSpeedValues={setSpeedValues} cycles={cycles} setCycles={setCycles} team={team} />
          <CharacterSelector charactersData={charactersData} team={team} setTeam={setTeam} speedValues={speedValues} setSpeedValues={setSpeedValues}/>
          <Timeline cycles={cycles} team={team} speedValues={speedValues}/>
        </>
    );
}

export default App;