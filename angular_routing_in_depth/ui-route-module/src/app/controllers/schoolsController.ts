import {ISchool} from '../models';
import {DataService, Notifier} from '../services';

export class SchoolsController {
  static $inject = [DataService.className, Notifier.className];
  static className = 'schoolsController';
  
  schools:ISchool[]; 

  constructor(
    private dataService:DataService,
    private notifier:Notifier
  ) {
    this.init();
  }

  init():void {
    this.dataService.getAllSchools()
      .then(schools => {
        this.schools = schools;
      })
      .catch(reason => {
        this.notifier.error(reason);
      })
  }

}