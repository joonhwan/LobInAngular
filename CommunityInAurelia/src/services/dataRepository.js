import {eventsData} from 'services/eventsData';
import moment from 'moment'; // moments 라이브러리는 ECMA2016 호환이 아님. 

function filterAndFormat(pastOrFuture, events_) {
    
    var events = JSON.parse(JSON.stringify(events_));
    var standardTime = moment("2000/1/1");
    if(pastOrFuture=='past') {
        events = events.filter(event => moment(event.dateTime) < standardTime);
    }
    else if(pastOrFuture=='future') {
        events = events.filter(event => moment(event.dateTime) > standardTime);
    }
    return events;
}

export class DataRepository {

    constructor() {
    }

    getEvents(pastOrFuture) {
        var me = this;
        var promise = new Promise((resolve, reject) => {
            if (!me.events) {
                setTimeout(_ => {
                    me.events = eventsData;
                    me.events.forEach(event => {
                        event.dateTime = moment(event.dateTime).format('YYYY/MM/DD HH:mm');
                    })
                    me.events = me.events.sort((a, b) => 
                        a.dateTime >= b.dateTime ? 1 : -1);
                        
                    resolve(filterAndFormat(pastOrFuture, me.events));
                }, 2000);
            }
            else {
                resolve(filterAndFormat(pastOrFuture, me.events));
            }
        });
        return promise;
    }

    getEvent(eventId) {
        return this.events.find(item => item.id == eventId);
    }
}