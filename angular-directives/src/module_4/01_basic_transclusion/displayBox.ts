import * as angular from 'angular';

class DisplayBoxCtrl  {
  hidden:boolean = false;

  constructor() {
  }

  close() {
    this.hidden = true;
  }
}

class DisplayBox implements ng.IDirective {
  restrict = 'E';
  template = require('./displayBox.html');
  controller = DisplayBoxCtrl;
  controllerAs = 'me';
  transclude = true;
  link(scope, elem, attrs, parentCtrl) {
    console.log('display-box link() is called');
  }
}

displayBox.$inject = [];
export function displayBox() {
  return new DisplayBox();
}