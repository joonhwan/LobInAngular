module ClassTest {
    "use strict";

    class Engine {
        constructor(public horsePower:number, public model:string) {            
        }
        toString() {
            return 'horse power : ' + this.horsePower + ', model: ' + this.model;
        }
    }
    class Auto {
        constructor(public basePrice: number,
            private _engine: Engine,
            public make: string,
            public model: string) {
        }

        get engine() {
            return this._engine;
        }
        set engine(value: Engine) {
            if(value === undefined) {
                throw "invalid engine!";
            }
            this._engine = value;
        }

        addAccessory(grade:number, ...accessory:string[]) : void {
            console.log('accessory grade : ' + grade);
            for (var i = 0; i < accessory.length; ++i) {
                console.log('accessory list : ' + accessory[i]);
            }
        }
    }

    class Truck extends Auto {
        constructor(basePrice: number, engine: Engine, make: string, model: string,
                    public bedLength:string, public fourByFour?:boolean) {
            super(basePrice, engine, make, model);
            this.fourByFour = fourByFour === undefined ? false : fourByFour;
        }
    }

<<<<<<< HEAD:TypeScriptFundamentals/TypeScriptTypes-Before/scripts/classTest.ts
    window.onload = _ => {
        console.log('classTest.ts -----------');

=======
    // window.onload = _ => {
>>>>>>> 3f3ed8cd7c00e4b15a1fb70a47b597a8ec1b91b7:TypeScriptFundamentals/TypeScriptTypes-Before/scripts/class.ts
        var auto = new Auto(4000, new Engine(4000, 'V8'), 'Chevy', 'Sliverado');
        console.log('engine type : ' + auto.engine.toString());

        var truck = new Truck(8000, new Engine(12000, 'H142'), 'Toyota', 'Megatron', '123m');
        console.log('truck bedlength = ' + truck.bedLength + ', 4x4 = ' + truck.fourByFour);

        truck.addAccessory(10, 'mirror', 'cd player', 'amp');
    // };
}