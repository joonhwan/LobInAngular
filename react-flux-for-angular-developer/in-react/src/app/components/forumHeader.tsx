import * as React from 'react';

interface ForumHeaderProps extends React.Props<any> {
  allAnswers:any;
}

export const ForumHeader = React.createClass({

  render() {

    let answerCount = this.props.answers ? this.props.answers.length : 0;

    return (
      <div className="navbar navbar-default">
        <a className="navbar-brand" href="#">React Forum</a>
      </div>
    );
  }

});