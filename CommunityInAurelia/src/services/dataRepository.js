import {eventsData} from 'services/eventsData';
import moment from 'moment'; // moments 라이브러리는 ECMA2016 호환이 아님. 

export class DataRepository {
    
    constructor() {
        this.events = eventsData;        
    }
    
    getEvents() {
        var promise = new Promise((resolve, reject) => {
           if(!this.events) {
               setTimeout(_ => {
                 this.events = this.eventsData;  
                 this.events.forEach(item => {
                    var normalizedDateTime 
                        = moment(item.dateTime).format('YYYY/MM/DD HH:mm:ss');
                    item.dateTime = normalizedDateTime;
                 });
               }, 2000);
           }
           resolve(this.events); // injection?!!!
        });
        return promise;
    }
    
    getEvent(eventId) {
        return this.events.find(item => item.id == eventId);
    }
}