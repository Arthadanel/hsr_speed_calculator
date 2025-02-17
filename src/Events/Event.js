export class Event {
    constructor() {
        this.callbacks = []
    }
    
    Invoke (...args) {
        this.callbacks.forEach(call => {
            call(...args);
        });
    }

    Subscribe (callback) {
        //pass callback
        this.callbacks.push(callback);
    }

    //probably not needed
    Unsubscribe () {
    }
}
