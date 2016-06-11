class Car {
    constructor(public engine: string) {
        
    }

    start() {
        console.log('Engine Started : ' + this.engine);
    }
    stop() {
        console.log('Engine Stopped : ' + this.engine);
    }
}

window.onload = () => {
    console.log('hello.ts -----------');
    var car = new Car('v8');
    car.start();
    car.stop();
}