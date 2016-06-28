import {DataService, Notifier} from '../services';
import {ISchool, IClassroom, IActivity} from '../models';

export class HomeController {

  // meta
  static $inject = [DataService.iid, Notifier.className];
  static className = 'homeController';

  // property
  message:string = "Welcome to School Buddy!";
  allSchools:ISchool[] = [];
  allClassrooms:IClassroom[] = [];
  allActivities:IActivity[] = [];

  // methods
  constructor(
    private dataService:DataService,
    private notifier:Notifier
  ) {
    this.initData();
  }

  initData():void {
    let ds = this.dataService;
    ds.getAllSchools()
      .then((schools:ISchool[]) => {
        this.allSchools = schools;
      })
      .catch(this.showError)
      ;
  }

  showError(reason) {
    this.notifier.error(reason);
  }
}