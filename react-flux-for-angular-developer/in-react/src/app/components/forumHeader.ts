import * as React from 'react';

export const ForumHeader = React.createClass({

  render() {

    let answerCount = this.props.answers ? this.props.answers.length : 0;

    return React.createElement(
      'nav',
      { className: 'navbar navbar-default' },
      React.createElement(
        'a',
        { href: '#', className: 'navbar-brand' },
        'React Forum' 
      )
    );
  }

});