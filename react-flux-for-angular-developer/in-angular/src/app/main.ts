import 'bootstrap/dist/css/bootstrap.min.css';
import * as $ from 'jquery';
import * as angular from 'angular';
import { AnswerService } from './services/answer.service';
import { AnswerDirective } from './directives/answer.directive';
import { AnswerController } from './controllers/answer.controller';

angular
  .module('Forum', [])
  .service('AnswerService', AnswerService)
  .directive('answer', AnswerDirective)
  .controller('AnswerController', AnswerController)
  ;
