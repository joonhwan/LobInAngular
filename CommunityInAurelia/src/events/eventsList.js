import {inject} from 'aurelia-framework';
import {DataRepository} from 'services/dataRepository';
import {Router, activationStrategy} from 'aurelia-router';

@inject(DataRepository, Router)
export class EventsList {
    constructor(dataRepository, router) {
        console.log("EventsList: ctor");
        this.dataRepository = dataRepository;
        this.router = router;
        this.whoAmI = '루크, 내가 네 아비다(다스베이더)';
    }
    
    goToDiscussion() {
        this.router.navigate('#/discussion');
    }
    
    // sample
    goToFirstEvent() {
        this.router.navigateToRoute('eventDetail', { eventId: this.events[0].id });
    }
    
    activate(params, routeConfig) {
        console.log('EventsList: activate by ' + routeConfig.name);
        // this.events = dataRepository.getEvents();
        
        var pastOrFuture = routeConfig.name == '' ? 'future' : routeConfig.name
        return this.dataRepository.getEvents(pastOrFuture).then(events => {
            
            if(params.speaker || params.topic) {
                var filteredResult = [];
                events.forEach(item => {
                    if(params.speaker
                        && item.speaker.toLowerCase().indexOf(params.speaker.toLowerCase()) > 0) {
                        filteredResult.push(item);
                    }
                    if(params.topic
                        && item.title.toLowerCase().indexOf(params.topic.toLowerCase()) > 0) {
                        filteredResult.push(item)
                    }
                });
                this.events = filteredResult;
            } else {
                this.events = events;
            }
            
            // generate all events [detailUrl] property
            this.events.forEach(event => {
                event.detailUrl
                    = this.router.generate('eventDetail', { eventId: event.id }); 
            });
        });
    }
    
    canActivate() {
        console.log('EventsList: canActivate');
        return true;
    }
    
    canDeactivate() {
        console.log('EventsList: canDeactivate');
    }
    
    deactivate() {
        console.log('EventsList: deactivate');
    }
    
    determineActivationStrategy() {
        console.log('EventsList: invokeLifecycle');
        //return activationStrategy.invokeLifecycle;
        //return activationStrategy.noChange;
        return activationStrategy.replace;
    }
    
}