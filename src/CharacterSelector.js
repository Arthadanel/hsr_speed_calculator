import { useState } from 'react';
import { ConstantsList } from './Constants';

export function CharacterSelector({characterData, team, setTeam, speedValues, setSpeedValues}) {
    const [lastPosition, setLastPosition] = useState(0);
    function SelectCharacter(characterData, selected, setSelected) { //todo: move to character selector
        console.log(selected, characterData);
        if(!selected && lastPosition >= ConstantsList.TEAM_SIZE) return; //all teamslots filled
        if (!selected) {
        let newTeam = [...team];
        newTeam[lastPosition] = characterData;
        let newSpeed = [...speedValues]
        newSpeed[lastPosition] = characterData["base_speed"];
        let newPosition = ConstantsList.TEAM_SIZE;
        for (let i = 0; i < ConstantsList.TEAM_SIZE; i++) {
            if (newTeam[i] === ConstantsList.EMPTY_CHARACTER) {
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
        for (let i = 0; i < ConstantsList.TEAM_SIZE; i++) {
            if (team[i] === characterData) {
            position = i;
            break;
            }
        }
        if (position < lastPosition) setLastPosition(position);
        let newTeam = [...team];
        newTeam[position] = ConstantsList.EMPTY_CHARACTER;
        let newSpeed = [...speedValues]
        newSpeed[position] = ConstantsList.DEFAULT_SPEED;
        setSpeedValues(newSpeed);
        setTeam(newTeam);
        setSelected(!selected);
        }
        // setLastPosition(lastPosition)
    }

  function Clear() {  //todo: move to character selector
    //todo: clear data in character listing
    setLastPosition(0);
    setTeam(Array(ConstantsList.TEAM_SIZE).fill(ConstantsList.EMPTY_CHARACTER));
    setSpeedValues(Array(ConstantsList.TEAM_SIZE).fill(ConstantsList.DEFAULT_SPEED));
  }

  let characters = [];
  for (let i = 0; i < characterData.length; i++) {
    const character = characterData[i];
    characters.push(<CharacterListing key={character.name} index={i} data={character} onCharacterClick={SelectCharacter}/>);
  }
  return (
    <>    
        <button className='clear-btn' onClick={Clear}>Clear</button>
        <div className='character-selector'>
        {characters}
        </div>
    </>
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