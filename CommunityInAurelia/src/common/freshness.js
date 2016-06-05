export class FreshnessValueConverter {
    toView(value) {
        var elapsed = (new Date() - value)/1000;
        if(elapsed > 5000) {
            return 'red';
        } else if(elapsed > 1000) {
            return 'yello';
        }
        return 'white';
    }
}