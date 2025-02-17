class Buff {
    constructor() {
        this.expireEvent = '';
    }
    init() {
        //subsctibe to events
    }

    onEvent() {
        this.lifetime--;
        if(this.lifetime <= 0) this.expireEvent.Invoke(this);
    }
}