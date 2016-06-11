var Car = (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.start = function () {
        console.log('Engine Started : ' + this.engine);
    };
    Car.prototype.stop = function () {
        console.log('Engine Stopped : ' + this.engine);
    };
    return Car;
})();

window.onload = function () {
    console.log('hello.ts -----------');
    var car = new Car('v8');
    car.start();
    car.stop();
};
//# sourceMappingURL=hello.js.map
