import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Forum } from './components/forum';
import { ForumHeader } from './components/forumHeader';

ReactDOM.render(
  React.createElement(Forum, null),
  document.getElementById('forum')
);
