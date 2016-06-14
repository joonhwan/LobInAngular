import angular from 'angular';
import {ILoginService} from './services/loginService'
//console.log("loading login module...");

class LoginController {

  static $inject = ['$location', 'loginService'];

  constructor(
    private $location:angular.ILocationService,
    private loginService:ILoginService) {

      console.log("creating login controller...");
      //loginService.clearCredentials();
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
