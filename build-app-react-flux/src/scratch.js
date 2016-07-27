function getSmallPet(key) {
    if (key === void 0) { key = "bird"; }
    if (key === "bird") {
        return {
            swim: function () {
                console.log("Swim.");
            },
            layEggs: function () {
                console.log("LayEggs");
            }
        };
    }
    else if (key === "bug") {
        return {
            hop: function () {
                console.log("hop");
            },
            layEggs: function () {
                console.log("LayEggs");
            }
        };
    }
    else {
        return {
            fly: function () {
                console.log("fly");
            },
            layEggs: function () {
                console.log("LayEggs");
            }
        };
    }
}
var pet = getSmallPet();
function isFish(pet) {
    return pet.swim !== undefined;
}
function isBug(pet) {
    return pet.hop !== undefined;
}
if (isFish(pet)) {
    pet.swim();
}
else if (isBug(pet)) {
    pet.hop();
}
else {
    pet.fly();
}
// export default function HOCStateToProps<Props, State, ComponentState>(
//   Comp: new () => Component<Props & State, ComponentState>, getState: () => State) {
//   return class HOCWrapper extends HOCBaseRender<Props, State, ComponentState>(Comp) {
//     // ... Implementation
//     constructor() {
//       super();
//       this.state = getState();
//     }
//   }
// } 
