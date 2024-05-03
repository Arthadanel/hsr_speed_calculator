import './App.css';

function App() {
  return (
    <>    
      <div className="input-data">
        <TeamData />
        <CyclesData />
      </div>
      <button className='calculate-btn'>Calculate</button>
      <Timeline />
    </>
  );
}

function TeamData() {
  return (
    <div className='team-data'>
      <CharacterData character='1'/>
      <CharacterData character='2'/>
      <CharacterData character='3'/>
      <CharacterData character='4'/>
    </div>
  )
}

function CharacterData({ character }) {
  return (
    <div className='character-data'>
      <div className='character-icon'>{character}</div>
      <SpeedInput />
    </div>
  )
}

function SpeedInput() {
  return (
    <input className='speed-input'></input>
  )
}

function CyclesData() {
  return (
    <div className='cycle-data'>
      <label>Cycles:</label>
      <input className='cycle-input'></input>
    </div>
  )
}

function Timeline() {
  return (
    <div className='timeline'>
      <CycleDivider turnNumber='1'/>
      <TurnData character='1' actionValue={63}/>
      <TurnData />
      <CycleDivider turnNumber='2'/>
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
