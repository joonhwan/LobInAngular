/// <reference path="../../app.d.ts" />
import 'bootstrap/dist/css/bootstrap.min.css';
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
  link(scope, element, attrs) {
    $('body').on("keypress", function (evt) {
            console.log('keypressed ' + element[0]);
            var videoElement = element[0] as HTMLVideoElement;
            if (videoElement.paused) {
              videoElement.play();
            } else {
              videoElement.pause();
            }
          });
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
  link(scope, elem, attrs) {
    console.log('EventPause linked to ' + elem.nodeName);
    let fn = this.$parse(attrs[EventPaused.className]);
    elem.on('pause', function(e) {
      scope.$apply(function() {
        fn(scope, {event:e});
      })
    });
  }
}

angular
  .module('app', [])
  .controller(namedCtor(MainCtrl))
  .directive(namedFactory(SpacebarSupport))
  .directive(namedFactory(EventPaused))
  ;
