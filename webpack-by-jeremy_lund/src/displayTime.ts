import * as moment from 'moment';

export function displayTime() {
  return moment().format('YYYY/MM/DD hh:mm:ss');
}