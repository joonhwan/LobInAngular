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

<<<<<<< HEAD
window.onload = () => {
    console.log('hello.ts -----------');
=======
// window.onload = () => {
>>>>>>> 3f3ed8cd7c00e4b15a1fb70a47b597a8ec1b91b7
    var car = new Car('v8');
    car.start();
    car.stop();
// }