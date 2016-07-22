import * as React from 'react';

export const ForumHeader = React.createClass({
  render() {
    return React.createElement(
      'nav',
      { className: 'navbar navbar-default' },
      React.createElement(
        'a',
        { href:'#', className:'navbar-brand'},
        'React Forum'
      )
    );
  }
});