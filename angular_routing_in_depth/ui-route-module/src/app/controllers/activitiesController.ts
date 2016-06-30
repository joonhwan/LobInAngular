import * as _ from 'lodash';
import {IActivity, IClassroom} from '../models';
import {DataService, Notifier} from '../services';

export class ActivitiesController {
  static $inject = [DataService.className, Notifier.className];
  static className = 'activitiesController';

  activities:IActivity[];
  allActivities:IActivity[];

  classrooms:IClassroom[];
  selectedClassroomId:number;

  constructor(
    private dataService:DataService,
    private notifier:Notifier
  ) {
    this.initData();
  }

  initData():void {
    this.activities = [];
    this.classrooms = [];
    this.selectedClassroomId = null;

    this.dataService.getAllActivities()
      .then(activities => {
        this.allActivities = activities;
        this.search();
      })
      .catch(reason => {
        this.notifier.error(reason);
      });
    this.dataService.getAllClassrooms()
      .then(classrooms => {
        this.classrooms = classrooms;
        this.selectedClassroomId = null;
      })
      .catch(reason => {
        this.notifier.error(reason);
      });
  }

  search(): void {
    this.activities = _.filter(this.allActivities, (activity:IActivity) => {
      return !this.selectedClassroomId
          || activity.classroom_id == this.selectedClassroomId;
    });
  }
}
