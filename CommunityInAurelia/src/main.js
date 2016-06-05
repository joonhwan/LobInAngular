import 'bootstrap';

export function configure(aurelia) {
 
    console.log('configuring!!!!!!!')   
    aurelia.use
        .globalResources('common/dateFormat', 'common/freshness')
        .standardConfiguration()
        .developmentLogging()
        ;
     
    aurelia
        .start()
        .then(a => a.setRoot('shell'))
        ;    
}