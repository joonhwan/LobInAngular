/// <reference path="../app.d.ts" />
import * as angular from 'angular';
import {ISchool} from './school';
import {IClassroom} from './classroom';
import {IActivity} from './activity';

let moduleName = 'models';
angular.module(moduleName, []);

export { moduleName, ISchool, IClassroom, IActivity };