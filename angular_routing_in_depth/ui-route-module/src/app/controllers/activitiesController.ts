import {IActivity} from '../models';
import {DataService, Notifier} from '../services';

export class ActivitiesController {
  static $inject = [DataService.className, Notifier.className];
  static className = 'activitiesController';

  activities:IActivity[];

  constructor(
    private dataService:DataService,
    private notifier:Notifier
  ) {
    this.initData();
  }

  initData():void {
    this.activities = [];
    this.dataService.getAllActivities()
      .then(activities => {
        this.activities = activities;
      })
      .catch(reason => {
        this.notifier.error(reason);
      })
  }
}
