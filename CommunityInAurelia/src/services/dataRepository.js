import {eventsData} from 'services/eventsData';
import moment from 'moment'; // moments 라이브러리는 ECMA2016 호환이 아님. 

export class DataRepository {

    constructor() {
    }

    getEvents() {
        var me = this;
        var promise = new Promise((resolve, reject) => {
            if (!me.events) {
                setTimeout(_ => {
                    me.events = eventsData
                    me.events
                        .forEach(item => {
                            var normalizedDateTime
                                = moment(item.dateTime).format('YYYY/MM/DD HH:mm:ss');
                            item.dateTime = normalizedDateTime;
                        }); 
                    me.events.sort((a, b) => 
                        a.dateTime >= b.dateTime ? 1 : -1);
                    resolve(me.events);
                }, 2000);
            }
            else {
                resolve(me.events); // injection?!!!
            }
        });
        return promise;
    }

    getEvent(eventId) {
        return this.events.find(item => item.id == eventId);
    }
}