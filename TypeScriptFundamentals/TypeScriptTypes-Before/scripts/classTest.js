var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ClassTest;
(function (ClassTest) {
    "use strict";

    var Engine = (function () {
        function Engine(horsePower, model) {
            this.horsePower = horsePower;
            this.model = model;
        }
        Engine.prototype.toString = function () {
            return 'horse power : ' + this.horsePower + ', model: ' + this.model;
        };
        return Engine;
    })();
    var Auto = (function () {
        function Auto(basePrice, _engine, make, model) {
            this.basePrice = basePrice;
            this._engine = _engine;
            this.make = make;
            this.model = model;
        }
        Object.defineProperty(Auto.prototype, "engine", {
            get: function () {
                return this._engine;
            },
            set: function (value) {
                if (value === undefined) {
                    throw "invalid engine!";
                }
                this._engine = value;
            },
            enumerable: true,
            configurable: true
        });

        Auto.prototype.addAccessory = function (grade) {
            var accessory = [];
            for (var _i = 0; _i < (arguments.length - 1); _i++) {
                accessory[_i] = arguments[_i + 1];
            }
            console.log('accessory grade : ' + grade);
            for (var i = 0; i < accessory.length; ++i) {
                console.log('accessory list : ' + accessory[i]);
            }
        };
        return Auto;
    })();

    var Truck = (function (_super) {
        __extends(Truck, _super);
        function Truck(basePrice, engine, make, model, bedLength, fourByFour) {
            _super.call(this, basePrice, engine, make, model);
            this.bedLength = bedLength;
            this.fourByFour = fourByFour;
            this.fourByFour = fourByFour === undefined ? false : fourByFour;
        }
        return Truck;
    })(Auto);

    window.onload = function (_) {
        console.log('classTest.ts -----------');

        var auto = new Auto(4000, new Engine(4000, 'V8'), 'Chevy', 'Sliverado');
        console.log('engine type : ' + auto.engine.toString());

        var truck = new Truck(8000, new Engine(12000, 'H142'), 'Toyota', 'Megatron', '123m');
        console.log('truck bedlength = ' + truck.bedLength + ', 4x4 = ' + truck.fourByFour);

        truck.addAccessory(10, 'mirror', 'cd player', 'amp');
    };
})(ClassTest || (ClassTest = {}));
//# sourceMappingURL=classTest.js.map
