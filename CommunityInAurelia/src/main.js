import 'bootstrap';

export function configure(aurelia) {
 
    console.log('configuring!!!!!!!')   
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        ;
     
    aurelia
        .start()
        .then(a => a.setRoot('shell'))
        ;    
}