import {useEffect, useState} from 'react';
import {Constants} from './Constants';

export function CharacterSelector({charactersData, team, setTeam, speedValues, setSpeedValues}) {
  const [isHidden, setHidden] = useState(false);
  const [selectedData, setSelectedData] = useState(getSelectedCharacters());
  useEffect(() => {
    setSelectedData(getSelectedCharacters());
  }, [team]);

  function getSelectedCharacters() {
    return charactersData.map(character => team.includes(character));
  }

  function SelectCharacter(characterData, selected) {
    let newTeam, newSpeed;

    if (!selected) {
      let index = Constants.EMPTY_CHARACTER;
      for (let i = 0; i < team.length; i++) {
        if (team[i] === Constants.EMPTY_CHARACTER) {
          index = i;
          break;
        }
      }
      if (index === Constants.EMPTY_CHARACTER) return; //all teamslots filled
      [newTeam, newSpeed] = setCharacter(characterData, index, team, speedValues);

    } else {
      let index = Constants.EMPTY_CHARACTER;
      for (let i = 0; i < Constants.TEAM_SIZE; i++) {
        const character = team[i];
        if (character["name"] === characterData["name"]) {
          index = i;
          break;
        }
      }
      if (index === Constants.EMPTY_CHARACTER) return;
      [newTeam, newSpeed] = setCharacter(Constants.EMPTY_CHARACTER, index, team, speedValues);
    }

    setTeam(newTeam);
    setSpeedValues(newSpeed);
  }

  let characters = [];
  for (let i = 0; i < charactersData.length; i++) {
    const character = charactersData[i];
    characters.push(<CharacterListing key={character.name} index={i} data={character}
                      onCharacterClick={SelectCharacter}
                      selected={selectedData[i]}/>);
  }

  function Clear() {
    setTeam(Array(Constants.TEAM_SIZE).fill(Constants.EMPTY_CHARACTER));
    setSpeedValues(Array(Constants.TEAM_SIZE).fill(Constants.DEFAULT_SPEED));
  }

  return (
    <>
      <button className='clear-btn' onClick={Clear}>Clear</button>
      <button className='hide-btn' onClick={() => setHidden(!isHidden)}> {isHidden ? "Show" : "Hide"} </button>
      <SelectorWindow characters={characters} isHidden={isHidden}/>
    </>
  )
}

function setCharacter(character, index, team, speedValues) {
  let newTeam = [...team];
  let newSpeed = [...speedValues]

  if (character === Constants.EMPTY_CHARACTER) {
    newTeam[index] = Constants.EMPTY_CHARACTER;
    newSpeed[index] = Constants.DEFAULT_SPEED;

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

function CharacterListing({data, onCharacterClick, selected}) {
  return (
    <div className={selected ? 'listing-border' : 'listing-borderless'}>
      <img className='character-icon' src={process.env.PUBLIC_URL + data.icon} alt={data.name}
         onClick={() => onCharacterClick(data, selected)}/>
    </div>
  )
}