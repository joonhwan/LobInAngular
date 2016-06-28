/// <reference path="../app.d.ts" />
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
    return this.$http.get('api/schools')
        .then(response => 
        {
          return response.data;
        })
        .catch(reason => {
          let errorMessage = 'Error retrieving schools : ' + reason.statusText;
          this.$log.error(errorMessage);
          return this.$q.reject(errorMessage);
        })
        ;
  }
}