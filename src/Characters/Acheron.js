import { Character } from './Character';

export class Acheron extends Character {

    constructor(...args) {
        super(...args);
        console.log("YEP IT WORKS A");
    }

    init(events) {
        events.DebufEvent.Subscribe(this.OnDebuf);
        this.debufEvent = events.DebufEvent;
    }

    skill() {
        //logic
        this.debufEvent.Invoke();
    }

    OnDebuf() {

    }

    applyBuff(buff) {
        this.buffs.push(buff);
        buff.expireEvent.Subscribe(this.onBuffExpire);
    }

    onBuffExpire() {
        //remove buff
    }
}