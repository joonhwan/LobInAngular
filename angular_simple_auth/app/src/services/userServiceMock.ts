import 'angular-mocks';
import {IUser, userServiceUri} from './userService';

const baseUri = userServiceUri;

class UserServiceMock {
  static $inject = ['$httpBackend'];

  users:IUser[];

  constructor(private $httpBackend:ng.IHttpBackendService) {

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

    $httpBackend.whenGET(/app/).passThrough();

    console.log("configured user service mock e2e ....");
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

angular
  .module("userServiceMock", ["ngMockE2E"])
  .run(UserServiceMock)