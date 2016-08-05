import 'bootstrap/dist/css/bootstrap.min.css';
import * as angular from 'angular';

class UserTileCtrl {
  static $inject = ['$scope'];

  constructor(private $scope) {
    this.user = this.$scope.user;
  }

  public user:any;

  // public toggleSelect() {
  //   console.log("toggleSelect()");
  //   this.user.selected = !this.user.selected;
  // }
}

interface UserTileScope extends ng.IScope {
  user:any;
}

class UserTile implements ng.IDirective {
  public restrict = 'E';
  public scope = {
    user: '='
  };
  public template = require('./userTile.html');
  public controller = UserTileCtrl;
  public controllerAs = "vm";

  public static factory(): ng.IDirectiveFactory {
    return () => {
      console.log("creating user tile directive.")
      return new UserTile();
    };
  }
}

class UserToggleClick implements ng.IDirective {
  public link(scope:UserTileScope, elems, attrs:ng.IAttributes) {
    console.log("toggleSelect()");
    elems.on('click', function() {
      console.log("you clicked!");
      // scope.$apply((scope:any) => {
      //   scope.user.selected = !scope.user.selected;
      // });
      // 또는
      scope.user.selected = !scope.user.selected;
      scope.$apply();
    });
  }
  public static factory():ng.IDirectiveFactory {
    return () => {
      console.log("business decorator directive has been created.");
      return new UserToggleClick();
    }
  }
}


export let userTile = UserTile.factory();
export let userToggleClick = UserToggleClick.factory();