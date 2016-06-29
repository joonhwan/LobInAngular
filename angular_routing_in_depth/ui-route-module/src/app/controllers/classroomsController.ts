import {IClassroom} from '../models';
import {DataService, Notifier} from '../services';

export class ClassroomsController {
  static $inject = [DataService.className, Notifier.className];
  static className = 'classroomsController';
  
  classrooms:IClassroom[];

  constructor(
    private dataService:DataService,
    private notifier:Notifier
  ) {
    this.initData();
  }

  initData():void {
    this.classrooms = [];
    this.dataService.getAllClassrooms()
      .then(classrooms => {
        this.classrooms = classrooms;
      })
      .catch(reason => {
        this.notifier.error(reason);
      })
  }
}