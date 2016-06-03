export class Shell {
    constructor() {
        
    }
    
    configureRouter(config, router) {
        this.router = router;
        config.title = "Joonhwan .NET User Group";
        config.map([
            { 
                route: ['', 'events'], 
                viewPorts : 
                {
                    mainContent:  { moduleId:'events/events' },
                    sideBar: { moduleId:'sideBar/sponsors' }
                },
                name:'events', title:'이벤트', nav:true 
            },
            {
                route: 'jobs', 
                viewPorts: {
                    mainContent: { moduleId:'jobs/jobs' },
                    sideBar: { moduleId:'sideBar/sponsors'}
                },
                name:'jobs', title:'구직', nav:true
            },
            {
                route: 'discussion', 
                viewPorts: {
                    mainContent: { moduleId:'discussion/discussion' },
                    sideBar: { moduleId:'sideBar/ads'}
                },
                name:'discussion', title:'토론', nav:true
            },
            {
                route: 'eventDetail/:eventId', 
                viewPorts: {
                    mainContent: { moduleId: 'eventDetail/eventDetail' },
                    sideBar: { moduleId:'sideBar/ads' }
                },
                name: 'eventDetail'
            }
        ]);
    }
}