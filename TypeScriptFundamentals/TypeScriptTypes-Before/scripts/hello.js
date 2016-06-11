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
<<<<<<< HEAD
})();

window.onload = function () {
    console.log('hello.ts -----------');
    var car = new Car('v8');
    car.start();
    car.stop();
};
//# sourceMappingURL=hello.js.map
=======
}());
// window.onload = () => {
var car = new Car('v8');
car.start();
car.stop();
// } 
>>>>>>> 3f3ed8cd7c00e4b15a1fb70a47b597a8ec1b91b7
