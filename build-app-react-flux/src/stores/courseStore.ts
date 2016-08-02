import {Course, CourseApi} from '../api/courseApi';
import {Dispatcher} from '../dispatchers/appDispatcher'
import {EventEmitter} from 'events';
import {CourseAction, CourseActionId} from '../actions/courseActions';

class CourseStoreClass {
  static EventType:string = 'change'; 
  private courses:Course[];
  private _impl: EventEmitter;
  
  constructor(){
    this.courses = [];
    this._impl = new EventEmitter();
    this.init();
  }

  init() {
    setTimeout(() => {
      this.courses = CourseApi.getAllCourses();
      this.emitChange();
    }, 2000);

    Dispatcher.register(payload => {
      let p = payload as CourseAction;
      switch(p.actionType)
      {
        case "CreateCourse":
        case "SaveCourse":
          this.saveCourse(p.course);
          break;
        case "DeleteCourse":
          this.deleteCourseById(p.id);
          break;
      }
    })
  }

  // from action
  saveCourse(course:Course) {
    CourseApi.saveCourse(course);
    this.emitChange();    
  }
  deleteCourseById(id:string) {
    CourseApi.deleteCourseById(id);
    this.emitChange();
  }

  // from view
  getAllCourses():Course[] {
    return this.courses;
  }
  
  addChangeListener(callback: Function) {
    this._impl.addListener(CourseStoreClass.EventType, callback);
  }
  removeChangeListener(callback: Function) {
    this._impl.removeListener(CourseStoreClass.EventType, callback);
  }
  emitChange() {
    this._impl.emit(CourseStoreClass.EventType);
  }
}

export let CourseStore = new CourseStoreClass();