import {IClassroom} from '../models';
import {DataService, Notifier} from '../services';

export class ClassroomSummaryController {
  static inject = [DataService.className, Notifier.className, '$stateParams'];

  selectedClassroom: IClassroom;

  constructor(
    private dataService:DataService,
    private notifier:Notifier,
    private $stateParams:ng.ui.IStateParamsService
  ) {
    this.init();
  }

  init():void {
    var classroomId = this.$stateParams['id'];
    this.dataService.getClassroom(classroomId)
      .then(classroom => {
        this.selectedClassroom = classroom;
      })
      .catch(reason => {
        this.notifier.error(reason);
      })
  }
}