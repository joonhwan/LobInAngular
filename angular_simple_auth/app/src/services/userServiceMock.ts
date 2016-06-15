import 'angular-mocks';
import * as _ from 'lodash';
import {IUser, userServiceUri} from './userService';

const baseUri = userServiceUri;

class UserServiceMock {
  static $inject = ['$httpBackend', '$timeout'];

  users: IUser[];

  constructor(
    private $httpBackend: ng.IHttpBackendService,
    private $timeout: angular.ITimeoutService
  ) {

    console.log("configuring user service mock e2e ....");

    this.users = populateData();

    $httpBackend.whenGET(userServiceUri).respond((method, url, data, header, params) => {
      return [
        200, //status
        this.users, // data
        header, // header
        "OK", // status text
      ];
    });

    const uriWithId = new RegExp(userServiceUri + "/[0-9]+");
    $httpBackend.whenGET(uriWithId).respond((metehod, url, data, header, params) => {
      var id = parseInt(url.split("/").slice(-1)[0]);
      var found = _.find(this.users, user => user.id === id);
      if (found) {
        return [
          200, //status
          found, // data
          header, // header
          "OK", // status text
        ];
      } else {
        return [
          404, // status. NOT FOUND
          null,
          header,
          "NOT FOUND"
        ];
      }
    });

    // var timeoutService = $timeout;
    // console.log('timeout =' + timeoutService);

    const uriWithName = new RegExp(userServiceUri + "/[a-zA-Z].*");
    $httpBackend.whenGET(uriWithName).respond((method, url, data, header, params) => {

      var name = (<string>url).split("/").slice(-1)[0];
      var found = _.find(this.users, user => {
        return user.userName === name;
      });
      if (found) {
        return [200, found, header, "OK"];
      } else {
        return [404, null, header, "NOTFOUND!"];
      }
    });

    $httpBackend.whenPOST(userServiceUri).respond((method, url, data, header) => {
      let newUser = <IUser>JSON.parse(<string>data);
      let existingUserWithSameName = _.find(this.users, user => user.userName === newUser.userName);
      if (existingUserWithSameName) {
        return [409, null, header, "Conflicted id"];
      } else {
        var maxId = (_.maxBy(this.users, user => user.id)).id;
        newUser.id = maxId + 1;
        this.users.push(newUser);
        return [200, newUser, header, "OK"];
      }
    });

    $httpBackend.whenGET(/app/).passThrough();

    console.log("configured user service mock e2e ....");
  }
}

function populateData(): IUser[] {
  return [
    {
      id: 1,
      userName: "jhlee",
      password: "winkler7"
    },
    {
      id: 2,
      userName: "guguboy",
      password: "guguboymirero"
    },
    {
      id: 3,
      userName: "hacho",
      password: "hachomirero"
    },
    {
      id: 4,
      userName: "limhs",
      password: "limhsmirero"
    },
    {
      id: 5,
      userName: "mirero",
      password: "mirero"
    }
  ];
}

angular
  .module("userServiceMock", ["ngMockE2E"])
  // .config(['$provide', ($provide: angular.IModule) => {
      
  //     console.log("configuring proxy...");
  //     $provide.decorator('$httpBackend', ['$delegate', function($delegate: any) {

  //       return $delegate;
  //       // var proxy = (method:any, url:any, data:any, callback:any, headers:any) => {
  //       //     var interceptor = function() {
  //       //         var _this = this,
  //       //             _arguments = arguments;
  //       //         setTimeout(function() {
  //       //             callback.apply(_this, _arguments);
  //       //         }, 700);
  //       //     };
  //       //     return $delegate.call(this, method, url, data, interceptor, headers);
  //       // };
  //       // for(var key in $delegate) {
  //       //     (<any>proxy)[key] = $delegate[key];
  //       // }
  //       // return proxy;
  //     }]);
  // }])
  .run(UserServiceMock)