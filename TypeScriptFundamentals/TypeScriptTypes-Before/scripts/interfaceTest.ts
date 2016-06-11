module InterfaceTest {
    "use strict";

    interface IEngine {
        start(cb: (isOn:boolean, engineType:string) => void) : void;
        stop(cb: (isOn:boolean, engineType:string) => void) : void;
    };

    class StandardEngine implements IEngine {

        constructor(
            public horsePower: number,
            public engineType: string
            ) {
        }
        start(cb: (isOn: boolean, engineType: string) => void): void {
            console.log("staring engine...");
            window.setTimeout(() => cb(true, "standard engine"), 1000);
        }
        stop(cb: (isOn: boolean, engineType: string) => void): void {
            console.log("stoping engine...");
            window.setTimeout(() => cb(false, "standard engine"), 500);
        }
    }

    class CustomEngine implements  IEngine {
        start(cb: (isOn: boolean, engineType: string) => void): void {
            console.log("staring custom engine...");
            window.setTimeout(() => cb(true, "custom engine"), 1000);
        }
        stop(cb: (isOn: boolean, engineType: string) => void): void {
            console.log("stoping custom engine...");
            window.setTimeout(() => cb(false, "custom engine"), 500);
        }
    }

    window.onload = (_ : Event) => {
        console.log('interfaceTest .ts -----------');

        var engine = new CustomEngine(); //new StandardEngine(400, "V8");
        engine.start((isOn: boolean, engineType: string) => {
            console.log('isOn = ' + isOn + ', entine type = ' + engineType);
        });
        engine.stop((isOn:boolean, engineType:string) => {
            console.log('isOn = ' + isOn + ', entine type = ' + engineType);
        });

        var standardEngine = <StandardEngine>engine;        
        console.log('yeah. engine is standard ? : '
            + (engine instanceof StandardEngine)); 
        // console.log('engine.isPrototypeof(StandardEngine) = ' + engine.isPrototypeOf(StandardEngine));
        console.log('engine itself = ' + standardEngine);
        console.log('horse power = ' + standardEngine.horsePower);

    };
}