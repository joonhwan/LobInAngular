import angular from 'angular';
import {ILoginService} from './services/loginService';

//console.log("loading home module...");

class HomeController {
  static $inject = ['$location', 'loginService'];
  constructor(private $location:angular.ILocationService,
  private loginService:ILoginService) {
  }

  message:string = "Message from Home Controller";
  logOut(): void {
    console.log("logout...");
    this.$location.path("/login");
    this.loginService.clearCredentials();
  }
}

angular
  .module("home", [])
  .controller('homeController', HomeController);