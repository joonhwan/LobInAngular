import * as React from 'react';
import {ForumAnswer} from './forumAnswer';
import {IAnswer} from '../models/answer';

export const ForumAnswers = React.createClass({
  render() {
    let answers = this.props.answers as IAnswer[];
    let answerElements = [];

    answers.forEach((answer, index) => {
      answerElements.push(
        <ForumAnswer key={index} answer={answer} />
      );
    })

    return (
      <div>
        { answerElements }
      </div>
    );
  }
});