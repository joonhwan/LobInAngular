import * as angular from 'angular';
declare function require(path: string): any;

export function AnswerDirective() {
  return {
    template: require('./answer.directive.html'),
    restrict: 'E'
  };
}