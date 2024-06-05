export default class Character {
    constructor(id, data, speed, skillPattern, target, ultTrigger) {
        this.id = id;
        this.data = data;
        this.name = data["name"];
        this.speed = speed;
        this.skillPattern = skillPattern;   //ex. 010
        this.target = target;   //target char id
        this.buffs = new BuffList();
        this.av = Number(getAV(speed));
        this.energy = data["max_energy"] * 0.5;
        this.er = 100;
        this.stacks = 0;
        this.ultTrigger = ultTrigger;
    }

    updateAV() {
        this.av += Number(getAV(this.speed));
    }

    basicAttack() {

    }

    skill() {

    }

    ult() {

    }
}

class BuffList {
    constructor() {
        this.buffs = []
    }

    addBuff(buff) {//todo
        //todo
        let newBuff = new Buff(...buff.split(' '));
        let refresh = false;
        for (let i = 0; i < this.buffs.length; i++) {
            const element = this.buffs[i];
            if(element.id === newBuff.id) {
                this.buffs[i].refresh();
                refresh = true;
                break;
            }
        }
        if (!refresh) {            
            this.buffs.push(newBuff);
            newBuff.apply();
        }
        
    }

    decreaseDuration() {//todo

    }

    #removeBuff(buff) {//todo

    }
}

class Buff {
    constructor(id, effect, targetType, value, duration) {
        this.id = id;
        this.effect = effect;
        this.max_value = value;
        this.value = value;
        this.max_duration = duration;
        this.duration = duration;
        this.targetType = targetType;   //self/target/global
    }

    apply(character) {//todo

        return character;
    }

    lift(character) {//todo

        return character;
    }

    refresh() {
        this.duration = this.max_duration;
    }

    static compare(a, b) {
        return a.id === b.id;
    }
}

function getAV(speed) {
  return (10000 / speed).toFixed(2);
}