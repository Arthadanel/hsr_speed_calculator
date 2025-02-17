import { GetData } from './CharactersData';
import { CharacterSelector } from './CharacterSelector';
import { Timeline } from './Timeline';
import { Constants } from './Constants';
import { TeamData } from './TeamData'
import { LocalStorageState } from './Utils';
import './App.css';

const charactersData = GetData();

function App() {
  // charactersData = GetData();
  console.log("STORAGE", localStorage);
  
  // localStorage.removeItem("team");
  // localStorage.clear();

  const team_state_info = states.get(STATE_KEYS.TEAM);
  const [team, setTeam] = LocalStorageState(STATE_KEYS.TEAM, ...Object.values(team_state_info));
  
  const speed_state_info = states.get(STATE_KEYS.SPEED_VALUES);
  const [speedValues, setSpeedValues] = LocalStorageState(STATE_KEYS.SPEED_VALUES, ...Object.values(speed_state_info));
  
  const cycles_state_info = states.get(STATE_KEYS.CYCLES);
  const [cycles, setCycles] = LocalStorageState(STATE_KEYS.CYCLES, ...Object.values(cycles_state_info));

  return (
        <>
          <TeamData speedValues={speedValues} setSpeedValues={setSpeedValues} cycles={cycles} setCycles={setCycles} team={team} />
          <CharacterSelector charactersData={charactersData} team={team} setTeam={setTeam} speedValues={speedValues} setSpeedValues={setSpeedValues}/>
          <Timeline cycles={cycles} team={team} speedValues={speedValues}/>
        </>
    );
}

export const STATE_KEYS = {
    TEAM: "team",
    SPEED_VALUES: "speedValues",
    CYCLES: "cycles"
}

const states = new Map ([
    ["team", {
        initial: Array(Constants.TEAM_SIZE).fill(null),
        getter: (arr) => {
          const result = arr
            .split(Constants.SPLITTER)
            .map((character) => character === Constants.EMPTY_CHARACTER ? null : charactersData[Number(character)]);
          
          return result;
        },
        setter: (arr) => {
          const result = arr
            .map((character) => character === null ? Constants.EMPTY_CHARACTER : character.id)
            .join(Constants.SPLITTER);
          return result;
        }
    }],
    ["speedValues", {
        initial: Array(Constants.TEAM_SIZE).fill(Constants.DEFAULT_SPEED),
        getter: (arr) => {
          const result = arr
            .split(Constants.SPLITTER)
            .map((speed) => Number(speed));
          return result;
        },
        setter: (arr) => {
          const result = arr
            .map((speed) => speed.toString())
            .join(Constants.SPLITTER);
          return result;
        }
    }],
    ["cycles", {
        initial: Constants.DEFAULT_CYCLES,
        getter: (value) => {
            const result = Number(value);
            return result;
        },
        setter: (value) => {
            const result = value.toString();
            return result;
        }
    }]
]);

export default App;