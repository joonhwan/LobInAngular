export class Events {
    
    configureRouter(config, router) {
        this.router = router;
        config.title = "Events";
        config.map([
            {
                name: 'future',
                route:['', 'future'], moduleId: 'events/eventsList',
                title:'Future Events', nav:true 
            },
            {
                name: 'past',
                route:['past'], moduleId: 'events/eventsList',
                title:'Past Events', nav:true, href: '#/events/past'
            }
        ]);
    }
    
}