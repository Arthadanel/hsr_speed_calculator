export class Character {
    constructor(id, data, speed, skillPattern, target, ultTrigger) {
        this.NAME = data["name"];
        this.BASE_SPD = data["base_speed"];
        this.MAX_ENERGY = data["max_energy"];

        this.id = id;
        this.target = target;   //target char id
        this.speed = speed;

        this.av = Number(getAV(this.speed));

        //todo (low priority)
        this.skillPattern = skillPattern;   //ex. 010
        this.ultTrigger = ultTrigger;

        //TESTING
        console.log(this.NAME);        
    }    

    updateAV() {
        this.av += Number(getAV(this.speed));
    }
}

function getAV(speed) {
  return (10000 / speed).toFixed(2);
}