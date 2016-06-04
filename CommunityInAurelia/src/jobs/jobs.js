import {inject} from 'aurelia-framework';
import {DataRepository} from 'services/dataRepository';

@inject(DataRepository)
export class Jobs {
    
    constructor(dataRepository) {    
        console.log("Jobs : create");
        this.jobs = [];
        this.dataRepository = dataRepository;
    }
    
    // canActivate(params, routeConfig, navigationInstruction) {
    //     console.log("Jobs : CanActivate");
    //     var promise = new Promise((resolve, reject) => {
    //        setTimeout(_ => {
    //            resolve(true);
    //        }, 10); 
    //     });
    //     return promise;
    // }
    
    activate(params, routeConfig, navigationInstruction) {
        this.jobs = [];
        this.router = navigationInstruction.router;
        return this.dataRepository
                    .getJobs()
                    .then(jobs => this.jobs = jobs)
                    ;
    }
    
    addJob() {
        this.router.navigateToRoute('addJob');
    }
}