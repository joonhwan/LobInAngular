/// <reference path="../app.d.ts" />
import * as _ from 'lodash';
import * as angular from 'angular';
import {ISchool} from '../models/school';
import {IClassroom} from '../models/classroom';
import {IActivity} from '../models/activity';

export class DataService {
  static $inject = ['$http', '$q', '$log', '$timeout'];
  static className  = 'dataService';

  constructor(
    private $http:angular.IHttpService,
    private $q:angular.IQService,
    private $log:angular.ILogService,
    private $timeout:angular.ITimeoutService) {
    }

  getAllSchools() : angular.IPromise<ISchool[]> {
    return this.$http.get('/api/schools')
        .then(response => response.data)
        .catch(reason => this.handleError('schools', reason));
  }
  getAllClassrooms(): angular.IPromise<IClassroom[]> {
    return this.$http.get('/api/classrooms')
      .then(response => response.data)
      .catch(reason => this.handleError('classroom', reason));
  }
  getClassroom(classroomId:number): angular.IPromise<IClassroom> {
    // return this.$http.get('/api/classrooms/' + classroomId)
    //   .then(response => response.data)
    //   .catch(reason => this.handleError('classroom', reason));
    let defer = this.$q.defer<IClassroom>();
    this.getAllClassrooms()
      .then(response => {
        let classroom = _.find(response, elem => elem.id === Number(classroomId));
        if(classroom) {
          defer.resolve(classroom);
        } else {
          defer.reject("No classroom with id[" + classroomId + "]");
        }
      });
    return defer.promise;
  }
  getAllActivities(): angular.IPromise<IActivity[]> {
    return this.$http.get('/api/activities')
      .then(response => response.data)
      .catch(reason => this.handleError('activity', reason));
  }

  handleError(hint:string, reason:any):angular.IPromise<any> {
    let errorMessage = 'Error retrieving [' + hint +'] : ' + reason.statusText;
    this.$log.error(errorMessage);
    return this.$q.reject(errorMessage);
  }
}