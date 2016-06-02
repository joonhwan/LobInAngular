export class Shell {
    constructor() {
        
    }
    
    configureRouter(config, router) {
        this.router = router;
        config.title = "Joonhwan .NET User Group";
        config.map([
            { 
                route: ['', 'events'], moduleId:'events/events', 
                name:'Events', title:'EventsTitle', nav:true 
            },
            {
                route: 'jobs', moduleId:'jobs/jobs',
                name:'Jobs', title:'JobsTitle', nav:true
            },
            {
                route: 'discussion', moduleId:'discussion/discussion',
                name:'Discussion', title:'DiscussionTitle', nav:true
            },
        ]);
    }
}