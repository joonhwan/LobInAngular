import {inject} from 'aurelia-framework';
import {DataRepository} from 'services/dataRepository';

function initJob(addJob) {
    addJob.job = {
        jobType:'Full Time',
        jobSkills: []
    };  
}

@inject(DataRepository)
export class AddJob {
    constructor(dataRepository) {
        
        this.dataRepository = dataRepository;
        dataRepository.getJobTypes().then(jobTypes => {
            this.jobTypes = jobTypes;
        })
        dataRepository.getJobSkills().then(jobSkills => {
            this.jobSkills = jobSkills;
        })
        dataRepository.getStates().then(states => {
            this.states = states;
        })
        
        this.titlePlaceHolderElapsedTime = 0;
        this.titlePlaceHolder = "Input Job Title"
        this.intervalId = setInterval(function() {
            this.titlePlaceHolder = "Input Job Title : Elapsed " + this.titlePlaceHolderElapsedTime++ + " secs"; 
        }, 1000);
        initJob(this);
    }
    
    activate(params, routeConfig, navigationInstruction) {
        this.router = navigationInstruction.router;
        console.log('addjob activated : route=' + this.route);
    }
    
    deactivate() {
        clearInterval(this.intervalId);
    }
    
    save() {
        if(this.job.needDate) {
            this.job.needDate = new Date(this.job.needDate);
        }
        this.dataRepository.addJob(this.job).then(job => {
            console.log('addjob saved : route=' + this.route);
            this.router.navigateToRoute('jobs');
        });
    }
}