import {inject} from 'aurelia-framework';
import {DataRepository} from 'services/dataRepository';

@inject(DataRepository)
export class Events {
    constructor(dataRepository) {
        // this.events = dataRepository.getEvents();
        dataRepository.getEvents().then(events => {
            this.events = events
        });
    }
}