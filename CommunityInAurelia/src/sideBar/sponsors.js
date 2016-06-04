import {activationStrategy} from 'aurelia-router';

export class Sponsors {
    
    constructor() {
        this.message = "Sponsor 1";
        this.counter = 1;
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