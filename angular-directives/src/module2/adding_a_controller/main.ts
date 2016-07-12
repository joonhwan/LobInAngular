/// <reference path="../../app.d.ts" />
import 'bootstrap/dist/css/bootstrap.min.css';
import * as angular from 'angular';

class MainCtrl {
  static className = 'mainCtrl';
  user:any;

  constructor() {
    this.user = {
      name: 'Luke Skywalker',
      address: {
        street: 'PO Box 123',
        city: 'Secret Rebel Base',
        planet: 'Yavin 4'
      },
      friends: [
        'Han',
        'Leia',
        'Chewbacca'
      ]
    }
  }

  knightMe(user):void {
    this.user.rank = 'knight'
  }
}

class UserInfoCard implements ng.IDirective {
  static className = 'userInfoCard';
  static $inject = ['$http'];
  static Factory(): ng.IDirectiveFactory {
    const directive = ($http: ng.IHttpService) => new UserInfoCard($http);
    return directive;
  }

  constructor(
    private $http:ng.IHttpService
  ) {
  }

  restrict: string = 'E';
  template: string = require('./userInfoCard.html');
  controller = MainCtrl.className;
  controllerAs = 'vm';
} 

angular
.module('app', [])
.controller(MainCtrl.className, MainCtrl)
.directive(UserInfoCard.className, UserInfoCard.Factory())
;