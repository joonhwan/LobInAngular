/// <reference path="../app.d.ts" />
import * as _ from 'lodash';
import * as angular from 'angular';
import 'angular-mocks';
import {ISchool} from '../models/school';
import {IClassroom} from '../models/classroom';
import {IActivity} from '../models/activity';

export default function register(mod:angular.IModule) {
  mod.run(['$httpBackend', ($httpBackend:ng.IHttpBackendService) => {

      _.forEach(classrooms, classroom => {
        let school = _.find(schools, (school:ISchool) => {
          return (school.id == classroom.school_id);
        });
        classroom.school = school;
      })     

      _.forEach(activities, activity => {
        let classroom = _.find(classrooms, (classroom:IClassroom) => {
          return (classroom.id == activity.classroom_id);
        });
        activity.classroom = classroom;
      })

      $httpBackend.whenGET((url:string) => {
        return !_.startsWith(url, '/api/');
      }).passThrough();

      //Full Version 으로 GET 모사. 
      $httpBackend.whenGET('/api/schools').respond((method, url, data, header) => {
        //response status (number), data, headers, and status text.
        return [200, schools, header, "OK"];
      });
      
      // Short Version 으로 GET 모사.
      $httpBackend.whenGET('/api/classrooms').respond(classrooms);

      $httpBackend.whenGET('/api/activities').respond(activities);

  }])
  ;
}

var schools:ISchool[] = [
  {
    "id": 1,
    "name": "Fort Craig Elementary",
    "principal": "Michelle Thorne"
  },
  {
    "id": 2,
    "name": "Edgewood Elementary",
    "principal": "Audrey Hills"
  },
  {
    "id": 3,
    "name": "Clarke Elementary",
    "principal": "Scott Johnson"
  },
  {
    "id": 4,
    "name": "Meadowview Elementary",
    "principal": "Jeffrey Bender"
  },
  {
    "id": 5,
    "name": "Coulter Ridge Elementary",
    "principal": "Leigh Williams"
  },
  {
    "id": 6,
    "name": "Hilltop Elementary",
    "principal": "Daniel Lanier"
  }
];

var classrooms:IClassroom[] = [
  {
    "id": 1,
    "name": "Mrs. Cox's 2nd Grade",
    "teacher": "Beth Cox",
    "message": "Always do your best!",
    "school_id": 1
  },
  {
    "id": 2,
    "name": "Mr. Elliott's Kindergarten",
    "teacher": "Martin Elliott",
    "message": "Treat people right!",
    "school_id": 1
  },
  {
    "id": 3,
    "name": "Mrs. Smith's 1st Grade",
    "teacher": "Amanda Smith",
    "message": "Do the right thing!",
    "school_id": 2
  },
  {
    "id": 4,
    "name": "Mr. Johnson's 4th Grade",
    "teacher": "Mike Johnson",
    "message": "Math rocks!",
    "school_id": 2
  },
  {
    "id": 5,
    "name": "Ms. Tanner's Kindergarten",
    "teacher": "Eliza Tanner",
    "message": "Share with new friends!",
    "school_id": 2
  },
  {
    "id": 6,
    "name": "Ms. Baker's 2nd Grade",
    "teacher": "Linda Baker",
    "message": "Reading is fun!",
    "school_id": 4
  },
  {
    "id": 7,
    "name": "Mr. Henderson's 3rd Grade",
    "teacher": "Brian Henderson",
    "message": "It's almost Summer!",
    "school_id": 4
  },
  {
    "id": 8,
    "name": "Mrs. Carey's 3rd Grade",
    "teacher": "Michelle Carey",
    "message": "Let's learn!",
    "school_id": 4
  }
];

var activities: IActivity[] = [
  {
    "activity_id": 1,
    "name": "Museum Field Trip",
    "date": "2015-10-01T16:00:00.000Z",
    "classroom_id": 1,
    "school_id": 1
  },
  {
    "activity_id": 2,
    "name": "Book Fair",
    "date": "2015-10-06T16:00:00.000Z",
    "classroom_id": 2,
    "school_id": 1
  },
  {
    "activity_id": 3,
    "name": "Petting Zoo Visit",
    "date": "2015-10-19T16:00:00.000Z",
    "classroom_id": 3,
    "school_id": 2
  },
  {
    "activity_id": 4,
    "name": "Pottery Class",
    "date": "2015-11-04T16:00:00.000Z",
    "classroom_id": 4,
    "school_id": 2
  },
  {
    "activity_id": 5,
    "name": "Finger Painting Fun",
    "date": "2015-11-16T16:00:00.000Z",
    "classroom_id": 5,
    "school_id": 2
  },
  {
    "activity_id": 6,
    "name": "Visiting Author",
    "date": "2015-11-18T16:00:00.000Z",
    "classroom_id": 6,
    "school_id": 4
  },
  {
    "activity_id": 7,
    "name": "Picnic Lunch",
    "date": "2015-11-23T16:00:00.000Z",
    "classroom_id": 7,
    "school_id": 4
  },
  {
    "activity_id": 8,
    "name": "Lunch with Grandparents",
    "date": "2015-12-01T16:00:00.000Z",
    "classroom_id": 8,
    "school_id": 4
  },
  {
    "activity_id": 9,
    "name": "Visit City Theater",
    "date": "2015-12-09T16:00:00.000Z",
    "classroom_id": 1,
    "school_id": 1
  },
  {
    "activity_id": 10,
    "name": "Create an Art Exhibit",
    "date": "2015-12-11T16:00:00.000Z",
    "classroom_id": 1,
    "school_id": 1
  }
];