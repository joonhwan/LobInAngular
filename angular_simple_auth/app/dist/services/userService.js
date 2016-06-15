System.register(['./serviceModule'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var serviceModule_1;
    var baseUri, UserService;
    return {
        setters:[
            function (serviceModule_1_1) {
                serviceModule_1 = serviceModule_1_1;
            }],
        execute: function() {
            //여기있는 type들은 server side 와 맞추어야 함. -_-
            baseUri = "/api/users";
            exports_1("userServiceUri", baseUri);
            class UserService {
                constructor($http, $q) {
                    this.$http = $http;
                    this.$q = $q;
                }
                create(user) {
                    return this.$http.post(baseUri, user);
                    // let deferred = this.$q.defer<IUser>();
                    // this.$http.post<IUser>(baseUri, user)
                    //   .success((data) => deferred.resolve(data))
                    //   .error((data, status) => deferred.reject('ERROR:' + status))
                    //   ;
                    // return deferred.promise;
                }
                getByUserName(userName) {
                    // return this.$http.get<IUser>(baseUri + '/' + userName);
                    var deferred = this.$q.defer();
                    this.$http.get(baseUri + '/' + userName)
                        .success(data => {
                        deferred.resolve(data);
                    })
                        .error((data, status) => {
                        deferred.reject(status);
                    });
                    return deferred.promise;
                }
                getById(id) {
                    return this.$http.get(baseUri + '/' + id);
                    // var deferred = this.$q.defer<IUser>();
                    // this.$http.get<IUser>(baseUri + '/' + id)
                    //   //.success((data: IUser, status: number, headers: angular.IHttpHeadersGetter, config: angular.IRequestConfig) => {
                    //   .success((data) => deferred.resolve(data))
                    //   // .error((data:any, status: number, headers: angular.IHttpHeadersGetter, config: angular.IRequestConfig) => {
                    //   .error((data, status) => deferred.reject('ERROR:' + status));
                    // return deferred.promise;
                }
                getAll() {
                    return this.$http.get(baseUri);
                    // // NOTE: 이 메소드의 구현은 결국, 임의의 Promise형을 다른 형태로 변경하는 방법...
                    // var deferred = this.$q.defer<IUser[]>();
                    // this.$http.get(baseUri)
                    //   //원본 success 시그너쳐 (data: T, status: number, headers: IHttpHeadersGetter, config: IRequestConfig):
                    //   // 길게 쓰나..
                    //   // .success((data:IUser[], status:number, headers: angular.IHttpHeadersGetter, config:angular.IRequestConfig) => {
                    //   //   deferred.resolve(<IUser[]>data);
                    //   // })
                    //   // 짧게 쓰나. 비슷
                    //   .success((data, status) => {
                    //       deferred.resolve(<IUser[]>data);
                    //   })
                    //   //(data: T, status: number, headers: IHttpHeadersGetter, config: IRequestConfig):
                    //   .error((data, status) => {
                    //     deferred.reject(null);
                    //   });
                    //   return deferred.promise;
                }
                update(user) {
                    return this.$http.put(baseUri + '/' + user.id, user);
                }
                deleteById(id) {
                    return this.$http.delete(baseUri + '/' + id);
                }
            }
            UserService.$inject = ['$http', '$q'];
            console.log('registering user service..');
            serviceModule_1.getServiceModule().service('userService', UserService);
        }
    }
});
//# sourceMappingURL=userService.js.map