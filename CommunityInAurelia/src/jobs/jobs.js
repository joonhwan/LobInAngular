export class Jobs {
    
    constructor() {    
        console.log("Jobs : create");
    }
    
    canActivate(params, routeConfig, navigationInstruction) {
        console.log("Jobs : CanActivate");
        var promise = new Promise((resolve, reject) => {
           setTimeout(_ => {
               resolve(false);
           }, 3000); 
        });
        return promise;
    }
}