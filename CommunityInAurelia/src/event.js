export class Event {
    // lifecycle : create -> activate -> deactivate -> removal
    activate(bindingContext) {
        this.item = bindingContext;
    }
}