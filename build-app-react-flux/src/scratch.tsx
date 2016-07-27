import * as React from 'react';
import {Component} from 'react';

interface EggLife {
  layEggs();
}

interface Fish extends EggLife {
  swim();

}

interface Bird extends EggLife {
  fly();
}

interface Bug extends EggLife {
  hop();
}

type PetKey = "bird" | "bug" | "fish";

function getSmallPet(key: PetKey = "bird"): Fish | Bird | Bug {
  if (key === "bird") {
    return {
      swim() {
        console.log("Swim.");
      },
      layEggs() {
        console.log("LayEggs");
      }
    }
  } else if (key === "bug") {
    return {
      hop() {
        console.log("hop");
      },
      layEggs() {
        console.log("LayEggs")
      }
    }
  } else {
    return {
      fly() {
        console.log("fly");
      },
      layEggs() {
        console.log("LayEggs");
      }
    }
  }

}

let pet = getSmallPet();

function isFish(pet: Fish | Bird | Bug): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
function isBug(pet: Fish | Bird | Bug): pet is Bug {
  return (pet as Bug).hop !== undefined;
}

if (isFish(pet)) {
  pet.swim();
} else if (isBug(pet)) {
  pet.hop();
} else {
  pet.fly();
}

function HOCBaseRender<Props, State, ComponentState>(Comp: new () => Component<Props & State, ComponentState>) {
  return class HOCBase extends Component<Props, State> {
    render() {
      return <Comp {...this.props} {...this.state}/>;
    }
  }
}

export default function HOCStateToProps<Props, State, ComponentState>(Comp: new () => Component<Props & State, ComponentState>, getState: () => State) {
  let BaseRenderClass = HOCBaseRender<Props, State, ComponentState>(Comp);
  return class HOCWrapper extends BaseRenderClass {
    // ... Implementation
    constructor() {
      super();
      this.state = getState();
    }
  }
}

class NameAndAge extends Component<{ name: string, age: number }, void> {
    render() {
        return <div>Name: {this.props.name}, Age: {this.props.age}</div>;
    }
}

let HocClass = HOCStateToProps<{ name: string }, { age: number }, void>(NameAndAge, () => ({ age: 12 }));
var hocClass = new HocClass();


interface TestProp {
  propString: string;
  propNumber: number;
}
interface TestState {
  stateString: string;
  stateNumber: number;
}

class TestComponent extends Component<TestProp, TestState> {
  constructor() {
    super();
  }
}

let tc = new TestComponent();
// tc.props.children
tc.props.propNumber
tc.props.propString




