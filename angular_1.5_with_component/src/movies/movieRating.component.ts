/// <reference path="../app.d.ts" />

let View = require('./movieRating.component.html');

class Controller {
  constructor() {
    this.entries = [];
  }

  entries:any[];
  value: number;

  // 처음 활성화 될때.
  $onInit():any {
    this.entries = new Array(this.value);
  }

  // 먼가 값이 바뀔때
  $onChanges(): any {
    this.entries = new Array(this.value);
  }
}

export default function registerMovieRatingsComponent(app:ng.IModule) {

  app.component("movieRating", {
    bindings: {
      value: "<"
    },
    transclude: true,
    template: View,
    controller: Controller,
    controllerAs: 'vm'
  });

}