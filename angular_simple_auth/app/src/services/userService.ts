import angular from 'angular';
import {getServiceModule} from './serviceModule';

//여기있는 type들은 server side 와 맞추어야 함. -_-
const baseUri = "/api/users";
export {baseUri as userServiceUri}

export interface IUserServiceResponse {
  user?:IUser;
  success:boolean;
  failReason:string;
}

export interface IUser {
  id:number;
  userName:string;
  password:string;
}

export interface IUserService {
  create(user:IUser):ng.IPromise<IUserServiceResponse>;
  getByUserName(userName:string):ng.IPromise<IUser>;
  getById(id:number):ng.IPromise<IUser>;
  getAll():ng.IPromise<IUser[]>;
  update(user:IUser):ng.IPromise<IUserServiceResponse>;
  deleteById(id:number):ng.IPromise<IUserServiceResponse>;
}

class UserService implements IUserService {
  static $inject = ['$http', '$q']

  constructor(
    private $http:angular.IHttpService,
    private $q:angular.IQService
    ) {

  }
  create(user:IUser):ng.IPromise<IUserServiceResponse> {
    return this.$http.post<IUserServiceResponse>(baseUri, user);
      //.then(this.handleSuccess, this.handleError('existing user'));
  }
  getByUserName(userName:string):ng.IPromise<IUser> {
    // return this.$http({
    //   method: "GET",
    //   url:"/api/users/" + userName 
    // });
    return this.$http.get<IUser>(baseUri + '/' + userName);
  }
  getById(id:number):ng.IPromise<IUser> {
    return this.$http.get<IUser>(baseUri + '/' + id);
  }
  getAll():ng.IPromise<IUser[]> {

    // NOTE: 이 메소드의 구현은 결국, 임의의 Promise형을 다른 형태로 변경하는 방법...
    var deferred = this.$q.defer<IUser[]>();
    this.$http.get(baseUri)
      //원본 success 시그너쳐 (data: T, status: number, headers: IHttpHeadersGetter, config: IRequestConfig):

      // 길게 쓰나..
      // .success((data:IUser[], status:number, headers: angular.IHttpHeadersGetter, config:angular.IRequestConfig) => {
      //   deferred.resolve(<IUser[]>data);
      // })

      // 짧게 쓰나. 비슷
      .success((data, status) => {
          deferred.resolve(<IUser[]>data);
      })

      //(data: T, status: number, headers: IHttpHeadersGetter, config: IRequestConfig):
      .error((data, status) => {
        deferred.reject(null);
      });
      return deferred.promise;
  }
  update(user:IUser):ng.IPromise<IUserServiceResponse>  {
    return this.$http.put<IUserServiceResponse>(baseUri + '/' + user.id, user);
  }
  deleteById(id:number):ng.IPromise<IUserServiceResponse> {
    return this.$http.delete<IUserServiceResponse>(baseUri + '/' + id);
  }

  // handleSuccess(response:ng.IHttpPromiseCallbackArg<IUserServiceResponse>):IUserServiceResponse {
  //   return {
  //     user:response.data,
  //     success: true,
  //     failReason: ''
  //   };
  // }
  // handleError(failReason:string):(reason:any) => IUserServiceResponse {
  //   // reason:any 를 입력받는 함수를 반환한다. 그 함수에서는 원하는 IUserServiceResponse를 반환한다.
  //   return _ => {
  //     return  {
  //       user: null,
  //       success:false,
  //       failReason:failReason
  //     };
  //   }
  // } 

}

console.log('registering user serivce..');
getServiceModule().factory('userService', UserService);