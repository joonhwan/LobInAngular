import 'bootstrap/dist/css/bootstrap.min.css';
import * as $ from 'jquery';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {routes} from './components/routes';

require('./favicon.ico');

let selector = document.getElementById('app');
ReactDOM.render(routes, selector);