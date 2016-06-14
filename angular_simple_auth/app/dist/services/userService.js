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
                    //.then(this.handleSuccess, this.handleError('existing user'));
                }
                getByUserName(userName) {
                    // return this.$http({
                    //   method: "GET",
                    //   url:"/api/users/" + userName 
                    // });
                    return this.$http.get(baseUri + '/' + userName);
                }
                getById(id) {
                    return this.$http.get(baseUri + '/' + id);
                }
                getAll() {
                    // NOTE: 이 메소드의 구현은 결국, 임의의 Promise형을 다른 형태로 변경하는 방법...
                    var deferred = this.$q.defer();
                    this.$http.get(baseUri)
                        .success((data, status) => {
                        deferred.resolve(data);
                    })
                        .error((data, status) => {
                        deferred.reject(null);
                    });
                    return deferred.promise;
                }
                update(user) {
                    return this.$http.put(baseUri + '/' + user.id, user);
                }
                deleteById(id) {
                    return this.$http.delete(baseUri + '/' + id);
                }
            }
            UserService.$inject = ['$http', '$q'];
            console.log('registering user serivce..');
            serviceModule_1.getServiceModule().factory('userService', UserService);
        }
    }
});
//# sourceMappingURL=userService.js.map