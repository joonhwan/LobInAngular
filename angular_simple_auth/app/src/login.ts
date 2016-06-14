import angular from 'angular';
import {ILoginService} from "./services/loginService";
import {IUserService} from "./services/userService";

//console.log("loading login module...");

class LoginController {

  static $inject = ['$location', 'loginService', 'userService'];

  constructor(
    private $location:angular.ILocationService,
    private loginService:ILoginService,
    private userService:IUserService) {

      console.log("creating login controller...");
      //loginService.clearCredentials();

      console.log('testing e2e..');
      this.userService.getAll().then(response => {
        for(var i=0; i<response.length; ++i) {
          console.log("--> user:" + response[i].userName);
        }
      })
  }
  userName: string;
  password: string;
  dataLoading: boolean = false;
  loginError: string;
  message:string = "Login message from LoginController";

  login() : void {
    this.dataLoading = true;
    this.loginError = "";
    this.loginService.login(this.userName, this.password, response => {
      if(response.success) {
        this.$location.path('/');
      } else {
        this.loginError = response.failReason
        this.dataLoading = false;
      }
    });
  }

}

angular
  .module("login", [])
  .controller("loginController", LoginController);
