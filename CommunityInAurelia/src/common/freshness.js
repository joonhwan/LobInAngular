export class FreshnessValueConverter {
    toView(value) {
        var elapsed = (new Date() - value)/1000;
        //console.log("freshness valueconverter called : " + value + ", elasped=" + elapsed);
        
        if(elapsed > 5) {
            return 'red';
        } else if(elapsed > 1) {
            return 'yellow';
        }
        return 'white';
    }
}