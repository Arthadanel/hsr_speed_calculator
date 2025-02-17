import { Event } from "./Event";
import Character from "../Character";
import { Constants } from "../Constants";

export class TimelineTest {

    static test(team, speedValues, cycles) {
        this.actionOrder(team, speedValues, cycles);
    }

    static actionOrder(team, speedValues, cycles) {

        //setup events
        console.log(team);
        


        //testing playground
        //let acheron = new ACHERON_DATA["class"](0, ACHERON_DATA, 104, '111', -1);
        //let acheron = new team[0]["class"](0, team[0], 104, '111', -1);

        // ============= FAILSAFE =============
        let empty = null;
        team.forEach(element => { //check for empty team
            if(element !== null) empty = element;
        });
        if (empty === null) return;
        // ============= FAILSAFE =============

        let test_char = team[0];
        let test = new test_char.class(test_char.id, test_char, speedValues[0]);

        //init all usable events
        const events = {
            "debuffEvent": new Event()
        }
        
        test.init(events);

        console.log(test);
        

        test.skill();
        test.ult();
        test.skill();
        test.skill();
        test.skill();
        test.skill();
        test.ult();
        test.skill();
        test.skill();

        //init characters
        //init buffs

        console.log("TEST", test);
    }

}

// const ACHERON_DATA = {
//         "name": "Acheron",
//         "icon": "icons/Character_Acheron_Icon.webp",
//         "base_speed" : 101,
//         "max_energy": 0,
//         "class": Acheron
//     }
// const BRONYA_DATA = {
//         "name": "Bronya",
//         "icon": "icons/Character_Bronya_Icon.webp",
//         "base_speed": 99,
//         "max_energy": 120,
//         "class": Bronya
//     }