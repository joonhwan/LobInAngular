import {inject} from 'aurelia-framework';
// 아래와 같이 aurelia-templating-resources를 쓰려면 
// jspm install aurelia-templating-resources를 실행해야 한다.
import {BindingSignaler} from 'aurelia-templating-resources';
import {eventsData} from 'services/eventsData';
import {jobsData, jobTypes, jobSkills, states} from 'services/jobsData';
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

@inject(BindingSignaler)
export class DataRepository {

    constructor(bindingSignaler) {
        this.bindingSignaler = bindingSignaler;
        setInterval(() => {
            this.bindingSignaler.signal('check-freshness');
        }, 1000);
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
                }, 20);
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
    
    addJob(job) {
        return new Promise((resolve, reject) => {
            this.getJobs().then(jobs => {
                this.jobs.push(job);
                resolve(job);
            });
        });
    }
    getJobs() {
        return new Promise((resolve, reject) => {
            if(!this.jobs) {
                this.jobs = jobsData;
                this.jobs.forEach(job => {
                    job.needDate = moment(job.needDate);
                })
            };
            resolve(this.jobs);
        });
    }
    getStates() {
        return new Promise((resolve, reject) => {
            if(!this.states) {
                this.states = states;
            };
            resolve(this.states);
        });
    }
    getJobTypes() {
        return new Promise((resolve, reject) => {
            if(!this.jobTypes) {
                this.jobTypes = jobTypes;
            };
            resolve(this.jobTypes);
        });
    }
    getJobSkills() {
        return new Promise((resolve, reject) => {
           if(!this.jobSkills) {
               this.jobSkills = jobSkills;
           }; 
           resolve(this.jobSkills);
        });
    }
}