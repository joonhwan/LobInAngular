import {inject} from 'aurelia-framework';
import {DataRepository} from 'services/dataRepository';
import {Router} from 'aurelia-router';

@inject(DataRepository, Router)
export class Events {
    constructor(dataRepository, router) {
        // this.events = dataRepository.getEvents();
        dataRepository.getEvents().then(events => {
            this.events = events;
            
            // generate all events [detailUrl] property
            this.events.forEach(event => {
                event.detailUrl
                    = router.generate('eventDetail', { eventId: event.id }); 
            });
        });
    }
}