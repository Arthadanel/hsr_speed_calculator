import { useState } from 'react';
import { ConstantsList } from './Constants';

export function CharacterSelector({charactersData, team, setTeam, speedValues, setSpeedValues}) {
    const [lastPosition, setLastPosition] = useState(0);
    const [listingSelectionReferences, setListingSelectionReferences] = useState(Array(ConstantsList.TEAM_SIZE).fill(ConstantsList.EMPTY_CHARACTER));

    function SelectCharacter(characterData, selected, setSelected) {
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
            let newListings = [...listingSelectionReferences];
            newListings[lastPosition] = setSelected;
            setListingSelectionReferences(newListings);
            setSpeedValues(newSpeed);
            setTeam(newTeam);
            setSelected(!selected);
            setLastPosition(newPosition);

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
            let newListings = [...listingSelectionReferences];
            newListings[lastPosition] = ConstantsList.EMPTY_CHARACTER;
            setListingSelectionReferences(newListings);
            setSpeedValues(newSpeed);
            setTeam(newTeam);
            setSelected(!selected);
        }
        // setLastPosition(lastPosition)
    }

  let characters = [];
  for (let i = 0; i < charactersData.length; i++) {
    const character = charactersData[i];
    characters.push(<CharacterListing key={character.name} index={i} data={character} onCharacterClick={SelectCharacter} />);
  }

  function Clear() {  //todo: move to character selector
    // console.log("Listings: ", listingSelectionReferences);
    for (let i = 0; i < ConstantsList.TEAM_SIZE; i++) {
        const listing = listingSelectionReferences[i];
        if (listing !== ConstantsList.EMPTY_CHARACTER) listing(false);
    }
    setLastPosition(0);
    setTeam(Array(ConstantsList.TEAM_SIZE).fill(ConstantsList.EMPTY_CHARACTER));
    setSpeedValues(Array(ConstantsList.TEAM_SIZE).fill(ConstantsList.DEFAULT_SPEED));
    setListingSelectionReferences(Array(ConstantsList.TEAM_SIZE).fill(ConstantsList.EMPTY_CHARACTER));
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

function CharacterListing({ data, onCharacterClick }) {
  const [selected, setSelected] = useState(false);
  return (    
    <div className={selected ? 'listing-border' : 'listing-borderless'}>
      <img className='character-icon' src={process.env.PUBLIC_URL + data.icon} alt={data.name} onClick={() => onCharacterClick(data, selected, setSelected)}/>
    </div>
  )
}