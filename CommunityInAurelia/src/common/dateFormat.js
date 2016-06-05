import moment from 'moment';

export class DateFormatValueConverter {
    constructor() {
        console.log('---------- DateFormatValueConverter created ---------------------------')
    }
    toView(value, format) {
        if(!format) {
            format = 'YY/MM/DD h:mm a';
        }
        return moment(value).format(format);
    }
    
    fromView(value) {
        return new Date(value);
    }
}