/// <reference path="../../app.d.ts" />
import 'bootstrap/dist/css/bootstrap.min.css';
import * as $ from 'jquery';
import * as angular from 'angular';

class MainCtrl {
  static className = 'mainCtrl';

  message: string = "Hello Joonhwan";
  messages: {text:string}[];

  constructor() {
    this.messages = [];
  }

  handlePause(e) {
    console.log('called handlePause() ' + e);
    this.messages.push({text:'paused'});
  }
}

function namedCtor<T>(aClass: {new():T;}): Object {
  let className = (aClass as any).className as string;
  let ctorObj = {};
  ctorObj[className] = aClass;
  return ctorObj;
}

function namedFactory<T extends ng.IDirective>(aClass: {new(...args:any[]): T; }): Object {
    let factory = (args) => new aClass(args);
    factory.$inject = aClass.$inject || [];

    let directiveName = (aClass as any).className as string;
    let factoryObj = {};
    factoryObj[directiveName] = factory;
    return factoryObj;
}

class SpacebarSupport implements ng.IDirective {
  static className = "spacebarSupport";
  constructor() {

  }
  restrict = 'A';
  link(scope: ng.IScope,
       element: JQuery,
       attrs: ng.IAttributes) {
    //let videoElement = element[0] as HTMLVideoElement;
    // $('body').on("keypress", function (evt) {
    //   console.log('keypressed ' + videoElement);
    //   setTimeout(() => {
    //     if (videoElement.paused) {
    //         videoElement.play();
    //     } else {
    //       videoElement.pause();
    //     }
    //   }, 150);
    // });
    const delta = 20;
    let videoElement = element[0] as HTMLVideoElement;
    document.body.onkeydown = e => {
      console.log('keydown : ' + e.keyCode);
      switch(e.keyCode) {
        case 32:
          setTimeout(() => {
            if (videoElement.paused) {
                videoElement.play();
            } else {
              videoElement.pause();
            }
          }, 150);
          break;
        case 37:
          if(videoElement.currentTime > delta) {
            videoElement.currentTime -= delta;
          } else {
            videoElement.currentTime = 0;
          }
        case 39:
          if(videoElement.currentTime < videoElement.duration - delta) {
            videoElement.currentTime += delta;
          } else {
            videoElement.currentTime = videoElement.duration;
          }
          break;
      }
    }
  }
}

class EventPaused implements ng.IDirective {
  static className = 'eventPaused';
  static $inject = ['$parse']

  constructor(private $parse:ng.IParseService) {
    console.log('created event paused directive...');
  }

  restrict = 'A';
  // scope = {
  //   eventPaused: '&'
  // };
  link(scope:ng.IScope, elem:JQuery, attrs:ng.IAttributes) {
    let videoElem = elem[0] as HTMLVideoElement;
    console.log('EventPause linked to ' + videoElem.tagName);
    let fn = this.$parse(attrs[EventPaused.className]);
    videoElem.onpause = (e) => {
      scope.$apply(function() {
        fn(scope, {event:e});
      })
    };
  }
}

angular
  .module('app', [])
  .controller(namedCtor(MainCtrl))
  .directive(namedFactory(SpacebarSupport))
  .directive(namedFactory(EventPaused))
  ;
