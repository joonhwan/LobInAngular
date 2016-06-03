import {inject} from 'aurelia-framework';
import {DataRepository} from 'services/dataRepository';
import {Router} from 'aurelia-router';

@inject(DataRepository, Router)
export class EventsList {
    constructor(dataRepository, router) {
        this.dataRepository = dataRepository;
        this.router = router;
    }
    
    goToDiscussion() {
        this.router.navigate('#/discussion');
    }
    
    // sample
    goToFirstEvent() {
        this.router.navigateToRoute('eventDetail', { eventId: this.events[0].id });
    }
    
    activate(params) {
        // this.events = dataRepository.getEvents();
        return this.dataRepository.getEvents().then(events => {
            
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
}