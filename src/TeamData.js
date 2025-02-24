import { Constants } from "./Constants";
import { EquipmentSetup } from './EquipmentSetup';
import { useState } from 'react';

export function TeamData({speedValues, setSpeedValues, cycles, setCycles, team}) {

  let characterComponents = [];
  for (let i = 0; i < Constants.TEAM_SIZE; i++) {
    function setSpeed(speed) {
      let newSpeed = [...speedValues];
      newSpeed[i] = speed;
      setSpeedValues(newSpeed);
    }
    characterComponents.push(<CharacterData key={i} index={i} speed={speedValues[i]} setSpeed={setSpeed} character={team[i]}/>);
  }
  return (
      <div className="input-data">        
        <div className='team-data'>
          {characterComponents}
        </div>
        <div className='other-data'>
          <CyclesData cycles={cycles} setCycles={setCycles}/>
        </div>
      </div>
  );
}

function CharacterData({ character, speed, setSpeed, index }) {
    const [isHidden, setHidden] = useState(true);
  return (
      <div className='character-data'>
        <img className='character-icon' src={process.env.PUBLIC_URL + (character === null ? "icons/blank.png" : character.icon)} alt='empty-icon'/>
        <input id={'speed-input' + index} className='speed-input' value={speed} onChange={(e) => setSpeed(e.target.value)}/>
        <button className="equipment-button" onClick={() => setHidden(!isHidden)}>⚙️</button>
        <EquipmentSetup isHidden={isHidden}/>
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