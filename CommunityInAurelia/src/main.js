import 'bootstrap';

export function configure(aurelia) {
 
    console.log('configuring!!!!!!!')   
    aurelia.use
        .globalResources('common/dateFormat', 'common/freshness')
        .standardConfiguration()
        .developmentLogging()
        .plugin('aurelia-dialog')
        .plugin('aurelia-validation')
        ;
     
    aurelia
        .start()
        .then(a => a.setRoot('shell'))
        ;    
}