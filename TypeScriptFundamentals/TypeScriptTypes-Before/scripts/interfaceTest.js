var InterfaceTest;
(function (InterfaceTest) {
    "use strict";

    ;

    var StandardEngine = (function () {
        function StandardEngine(horsePower, engineType) {
            this.horsePower = horsePower;
            this.engineType = engineType;
        }
        StandardEngine.prototype.start = function (cb) {
            console.log("staring engine...");
            window.setTimeout(function () {
                return cb(true, "standard engine");
            }, 1000);
        };
        StandardEngine.prototype.stop = function (cb) {
            console.log("stoping engine...");
            window.setTimeout(function () {
                return cb(false, "standard engine");
            }, 500);
        };
        return StandardEngine;
    })();

    var CustomEngine = (function () {
        function CustomEngine() {
        }
        CustomEngine.prototype.start = function (cb) {
            console.log("staring custom engine...");
            window.setTimeout(function () {
                return cb(true, "custom engine");
            }, 1000);
        };
        CustomEngine.prototype.stop = function (cb) {
            console.log("stoping custom engine...");
            window.setTimeout(function () {
                return cb(false, "custom engine");
            }, 500);
        };
        return CustomEngine;
    })();

    window.onload = function (_) {
        console.log('interfaceTest .ts -----------');

        var engine = new CustomEngine();
        engine.start(function (isOn, engineType) {
            console.log('isOn = ' + isOn + ', entine type = ' + engineType);
        });
        engine.stop(function (isOn, engineType) {
            console.log('isOn = ' + isOn + ', entine type = ' + engineType);
        });

        var standardEngine = engine;
        console.log('yeah. engine is standard ? : ' + (engine instanceof StandardEngine));

        // console.log('engine.isPrototypeof(StandardEngine) = ' + engine.isPrototypeOf(StandardEngine));
        console.log('engine itself = ' + standardEngine);
        console.log('horse power = ' + standardEngine.horsePower);
    };
})(InterfaceTest || (InterfaceTest = {}));
//# sourceMappingURL=interfaceTest.js.map
