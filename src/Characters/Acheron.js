import { Character } from './Character';

export class Acheron extends Character {

    constructor(...args) {
        super(...args);
        this.MAX_STACKS = 12;
        this.ULT_STACKS = 9;
        this.stacks = 5;
        console.log("YEP IT WORKS A");
    }

    init(events) {
        events.debuffEvent.Subscribe(this.onDebuff.bind(this));
        this.debuffEvent = events.debuffEvent;
    }

    skill() {
        console.log("SKILL");
        
        //logic
        this.debuffEvent.Invoke();
        this.debuffEvent.Invoke();
        console.log(this.stacks);
        
    }

    ult() {
        console.log("ULT");
        
        if (!this.canUlt()) return;

        this.stacks -= this.ULT_STACKS;
    }

    onDebuff() {        
        if(this.stacks < this.MAX_STACKS)
            this.stacks++;
    }

    applyBuff(buff) {
        this.buffs.push(buff);
        buff.expireEvent.Subscribe(this.onBuffExpire);
    }

    onBuffExpire() {
        //remove buff
    }

    canUlt() {
        return this.stacks >= this.ULT_STACKS;
    }
}