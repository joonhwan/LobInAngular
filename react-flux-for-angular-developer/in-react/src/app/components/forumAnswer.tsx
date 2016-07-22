import * as React from 'react';
import {IAnswer} from '../models/answer';

export const ForumAnswer = React.createClass({

  propTypes: {
    answer: React.PropTypes.object.isRequired
  },

  render() {
    let answer = this.props.answer as IAnswer;
    let additionalClass = answer.correct ? 'bg-success' : '';
    return (
      <div className="panel panel-default">
        <div className={"panel-body " + additionalClass}>
          {answer.body}
        </div>
      </div>
    );
  }
  
});