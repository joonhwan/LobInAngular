import * as _ from 'lodash';
import {CourseData} from './courseData';
import {Author} from './authorApi';

export interface Course {
  id:string;
  title:string;
  watchHref:string;
  author:{id:string, name:string};
  length:string;
  category:string;
}

export class CourseApiClass {
  courses:Course[];
  constructor() {
    this.courses = CourseData;
  }

  getAllCourses():Course[] {
    return _.clone(this.courses);
  }
  getCourseById(id:string):Course {
    let found = _.find(this.courses, course => course.id==id);
    return _.clone(found);
  }
  saveCourse(courseToUpdate:Course):Course {
    console.log('Imagine saving course via AJAX call...');
    if(courseToUpdate.id) {
      _.map(this.courses, course => {
        if(course.id == courseToUpdate.id) {
          return courseToUpdate;
        } else {
          return course;
        }
      })
    } else {
      courseToUpdate.id = this.generateId(courseToUpdate);
      this.courses.push(courseToUpdate);
    }
    return courseToUpdate;
  }
  deleteCourseById(id:string):Course {
    let found = _.find(this.courses, course => course.id==id);
    if(found) {
    _ .remove(this.courses, found);
    }
    return found; 
  }
  private generateId(course:Course) {
    return course.title.replace(' ','-');
  }
}

export let CourseApi = new CourseApiClass();