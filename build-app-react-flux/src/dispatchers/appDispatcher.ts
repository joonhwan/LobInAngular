import {Dispatcher as DispatcherClass} from 'flux';
import {AuthorAction} from '../actions/authorActions';
import {CourseAction} from '../actions/courseActions';

export let Dispatcher
  = new DispatcherClass<AuthorAction | CourseAction>();
