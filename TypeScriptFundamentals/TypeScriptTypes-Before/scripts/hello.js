var Car = (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.start = function () {
        alert('Engine Started : ' + this.engine);
    };
    Car.prototype.stop = function () {
        alert('Engine Stopped : ' + this.engine);
    };
    return Car;
})();

window.onload = function () {
    var car = new Car('v8');
    car.start();
    car.stop();
};
