/// <reference path="../../app.d.ts" />
import 'bootstrap/dist/css/bootstrap.min.css';
import * as angular from 'angular';

class MainCtrl {
  static className = 'mainCtrl';
  
  message:string = "Hello Joonhwan";
  
  constructor() {
  }
}


angular
  .module('app', [])
  .controller(MainCtrl.className, MainCtrl)
  .directive("spacebarSupport", () => {

    return {
      restrict: 'A',
      //link: (scope: ng.IScope, element: JQuery, attrs: ng.IAttributes, controller: {}, transclude: ng.ITranscludeFunction) => {
      link: (scope, element, attrs) => {
        $('body').on("keypress", function(evt) {
          console.log('keypressed ' + element[0]);
          var videoElement = element[0] as any;
          if(videoElement.paused) {
            videoElement.play();
          } else {
            videoElement.pause();
          }
        });
      }
    } as ng.IDirective;
  })
  ;