class Car {
    constructor(public engine: string) {
        
    }

    start() {
        alert('Engine Started : ' + this.engine);
    }
    stop() {
        alert('Engine Stopped : ' + this.engine);
    }
}

window.onload = () => {
    var car = new Car('v8');
    car.start();
    car.stop();
}