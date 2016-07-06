import {DataService, Notifier} from '../services';
import {ISchool, IClassroom, IActivity} from '../models';

export class HomeController {

  // meta
  static $inject = ['$log', DataService.className, Notifier.className];
  static className = 'homeController';

  // property
  message:string = "Welcome to School Buddy!";
  allSchools:ISchool[] = [];
  allClassrooms:IClassroom[] = [];
  allActivities:IActivity[] = [];

  // methods
  constructor(
    private $log:angular.ILogService,
    private dataService:DataService,
    private notifier:Notifier
  ) {
    this.refresh();
  }

  refresh():void {
    this.$log.info('refreshing home...');
    
    let ds = this.dataService;
    ds.getAllSchools()
      .then((schools:ISchool[]) => {
        this.allSchools = schools;
      })
      .catch(reason => {
        this.showError(reason);
      });
    ds.getAllClassrooms()
      .then((classrooms:IClassroom[]) => {
        this.allClassrooms = classrooms;
      })
      .catch(reason => {
        this.showError(reason);
      });
    ds.getAllActivities()
      .then((activities:IActivity[]) => {
        this.allActivities = activities;
      })
      .catch(reason => {
        this.showError(reason);
      })
  }

  showError(reason):void {
    this.notifier.error(reason);
  }
}