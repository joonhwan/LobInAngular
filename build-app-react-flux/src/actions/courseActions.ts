import {Course, CourseApi} from '../api/courseApi';
import {CourseStore} from '../stores/courseStore';
import {Dispatcher} from '../dispatchers/appDispatcher';

export type CourseActionId
 = "CreateCourse"
 | "SaveCourse"
 | "DeleteCourse"

export interface CourseAction {
  actionType:CourseActionId;
  course?: Course;
  id?:string;
};

class CourseActionsClass {
  create(course:Course) {
     CourseApi.saveCourse(course);

     Dispatcher.dispatch({
       actionType:"CreateCourse",
       course:course
     });
  }
  save(course:Course) {
    
  }
  delete(course:Course) {

  }
}
