import * as React from 'react';
import { ForumHeader } from './forumHeader';

export const Forum = React.createClass({
  render() {
    return React.createElement(
      'div',
       null,
       React.createElement(ForumHeader, null)
       );
  }
});