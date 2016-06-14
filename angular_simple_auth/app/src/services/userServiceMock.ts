import 'angular-mocks';
import {IUser, userServiceUri} from './userService';

const baseUri = userServiceUri;

class UserServiceMock {
  static $inject = ['$httpBackend'];

  users:IUser[];

  constructor(private $httpBackend:ng.IHttpBackendService) {
    this.users = populateData();

    $httpBackend.whenGET(userServiceUri).respond((method, url, data, header, params) => {
      return [
        200, //status
        this.users, // data
        header, // header
        "OK", // status text
        ];
    });
  }
}

function populateData() : IUser[] {
  return [
    {
      id:1,
      userName:"jhlee",
      password:"winkler7"
    },
    {
      id:2,
      userName:"guguboy",
      password:"guguboymirero"
    },
    {
      id:3,
      userName:"hacho",
      password:"hachomirero"
    },
    {
      id:4,
      userName:"limhs",
      password:"limhsmirero"
    },
    {
      id:5,
      userName:"mirero",
      password:"mirero"
    }
  ];
}

console.log("running user service mock e2e ....");
angular
  .module("userServiceMock", ["ngMockE2E"])
  .run(UserServiceMock)