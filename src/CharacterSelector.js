import { useState } from 'react';
import { ConstantsList } from './Constants';

export function CharacterSelector({charactersData, team, setTeam, speedValues, setSpeedValues}) {
    const [isHidden, setHidden] = useState(false);
    let recordedSelection = localStorage.getItem("selections");
    if (recordedSelection) recordedSelection = JSON.parse(recordedSelection);
    const [selectedData, setSelectedData] = useState(recordedSelection? recordedSelection : Array(charactersData.length).fill(false));

    function SelectCharacter(characterData, selected, setSelected) {
        let newTeam, newSpeed;

        if (!selected) {
          let index = ConstantsList.EMPTY_CHARACTER;
          for (let i = 0; i < team.length; i++) {            
            if(team[i] === ConstantsList.EMPTY_CHARACTER) {
              index = i;
              break;
            }
          }
          if (index === ConstantsList.EMPTY_CHARACTER) return; //all teamslots filled
          [newTeam, newSpeed] = setCharacter(characterData, index, team, speedValues);

        } else {
          let index = ConstantsList.EMPTY_CHARACTER;
          for (let i = 0; i < ConstantsList.TEAM_SIZE; i++) {
            const character = team[i];
            if (character["name"] === characterData["name"]) {
              index = i;
              break;
            }
          }
          if (index === ConstantsList.EMPTY_CHARACTER) return;          
          [newTeam, newSpeed] = setCharacter(ConstantsList.EMPTY_CHARACTER, index, team, speedValues);
        }
        
        setTeam(newTeam);
        setSpeedValues(newSpeed);
        setSelected(!selected);
    }

  function setSelected(index, selected) {
    const newData = [...selectedData];
    newData[index] = selected;
    setSelectedData(newData);
    localStorage.setItem("selections", JSON.stringify(newData));
  }

  let characters = [];
  for (let i = 0; i < charactersData.length; i++) {
    const character = charactersData[i];
    characters.push(<CharacterListing key={character.name} index={i} data={character} 
      onCharacterClick={SelectCharacter} selected={selectedData[i]} setSelected={(selected) => setSelected(i, selected)} />);
  }  

  function Clear() {

    setTeam(Array(ConstantsList.TEAM_SIZE).fill(ConstantsList.EMPTY_CHARACTER));
    setSpeedValues(Array(ConstantsList.TEAM_SIZE).fill(ConstantsList.DEFAULT_SPEED));
    setSelectedData(Array(charactersData.length).fill(false));
    localStorage.setItem("selections", JSON.stringify(Array(charactersData.length).fill(false)));
  }

  return (
    <>    
        <button className='clear-btn' onClick={Clear}>Clear</button>
        <button className='hide-btn' onClick={() => setHidden(!isHidden)}> {isHidden?"Show":"Hide"} </button>        
        <SelectorWindow characters={characters} isHidden={isHidden}/>
    </>
  )
}

function setCharacter(character, index, team, speedValues) {
  let newTeam = [...team];
  let newSpeed = [...speedValues]

  if (character === ConstantsList.EMPTY_CHARACTER) {
      newTeam[index] = ConstantsList.EMPTY_CHARACTER;
      newSpeed[index] = ConstantsList.DEFAULT_SPEED;
      
  } else {
      newTeam[index] = character;
      newSpeed[index] = character["base_speed"];
  }
  
  return [newTeam, newSpeed];
}

function SelectorWindow({characters, isHidden}) {
  if (isHidden) return null;
  return <div className='character-selector'>
         {characters}
         </div>
}

function CharacterListing({ data, onCharacterClick, selected, setSelected }) {
  return (
    <div className={selected ? 'listing-border' : 'listing-borderless'}>
      <img className='character-icon' src={process.env.PUBLIC_URL + data.icon} alt={data.name} onClick={() => onCharacterClick(data, selected, setSelected)}/>
    </div>
  )
}