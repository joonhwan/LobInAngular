import * as _ from 'lodash';
import {IActivity, IClassroom} from '../models';
import {DataService, Notifier} from '../services';

export class ActivitiesController {
  static $inject = [DataService.className, Notifier.className];
  static className = 'activitiesController';

  message:string = "All registered activies!!!!";
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
<<<<<<< 085267c4d92ade813c02cafbbd9370ab0d24c96f
        this.allActivities = activities;
        this.search();
=======
        console.log('retrived activities : ' + activities.length);
        this.activities = activities;
>>>>>>> ui-router 기본 동작 완료 확인. 이제 ui-router만의 기능 확인 시작
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
