export class Shell {
    constructor() {
        
    }
    
    configureRouter(config, router) {
        this.router = router;
        config.title = "Joonhwan .NET User Group";
        config.map([
            { 
                route: ['', 'events'], moduleId:'events/events', 
                name:'events', title:'EventsTitle', nav:true 
            },
            {
                route: 'jobs', moduleId:'jobs/jobs',
                name:'jobs', title:'JobsTitle', nav:true
            },
            {
                route: 'discussion', moduleId:'discussion/discussion',
                name:'discussion', title:'DiscussionTitle', nav:true
            },
            {
                route: 'eventDetail/:eventId', moduleId: 'eventDetail/eventDetail',
                name: 'eventDetail'
            }
        ]);
    }
}