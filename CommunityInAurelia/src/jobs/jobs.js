export class Jobs {
    
    constructor() {    
        console.log("Jobs : create");
    }
    
    canActivate(params, routeConfig, navigationInstruction) {
        console.log("Jobs : CanActivate");
        var promise = new Promise((resolve, reject) => {
           setTimeout(_ => {
               resolve(true);
           }, 3000); 
        });
        return promise;
    }
}