import {activationStrategy} from 'aurelia-router';

export class Sponsors {
    
    constructor() {
        this.message = "Sponsor 1";
        this.counter = 1;
        
        var m = new window.Map();
        m.set('a', 'Alpha');
        m.set('b', 'Bravo');
        m.set('c', 'Charlie');
        m.set('d', 'Delta');
        this.mapCollection = m;
        
    }
    
    activate() {
        this.intervalId = setInterval(() => {
            // console.log('this : ' + this + this==window ? '(window)' : '');
            // console.log('this.counter : ' + this.counter);
            // console.log('this.message : ' + this.message);
            this.message = 'Sponsor' + this.counter++;
        }, 1000); 
    }
    
    deactivate() {
        clearInterval(this.intervalId);
        this.counter = 1; // reset
    }
    
    determineActivationStrategy() {
        return activationStrategy.invokeLifecycle;
    }
    
    doSomething(message) {
        console.log(message);
    }
    
}