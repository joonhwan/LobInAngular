export class Event {
    // lifecycle : create -> activate -> deactivate -> removal
    activate(bindingContext) {
        this.item = bindingContext;
    }
    
    configureRouter(config, router) {
        this.router = router;
        config.title = "Events";
        config.map([
            {
                route:['', 'future'], moduleId: 'events/eventsList',
                title:'Future Events', nav:true 
            },
            {
                route:['past'], moduleId: 'events/past',
                title:'Past Events', nav:true
            }
        ]);
    }
}