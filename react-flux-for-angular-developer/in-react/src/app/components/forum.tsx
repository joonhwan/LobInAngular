import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ForumHeader } from './forumHeader';
import { ForumQuestion } from './forumQuestion';
import { ForumAnswers } from './forumAnswers';
import { ForumAddAnswerBox } from './forumAddAnswerBox';

export const Forum = React.createClass({

  getInitialState() {
    return {
      allAnswers: [
        {
          id: 1,
          body: "Isn't that about time travel?",
          correct: false
        },
        {
          id: 2,
          body: "React and Flux are a tool and methodologies for building the front end of web applications.",
          correct: false
        },
        {
          id: 3,
          body: "React is a synonym for 'respond'",
          correct: false
        }
      ]
    };
  },

  render() {

    // return React.createElement(
    //   'div',
    //    null,
    //    React.createElement(ForumHeader, { answers: this.state.allAnswers })
    //    );
    return (
      <div>
        <ForumHeader answers={this.state.allAnswers} />
        <div className="container-fluid">
          <ForumQuestion />
          <hr />
          <ForumAnswers answers={this.state.allAnswers} />
          <hr />
          <h4>Add an answer</h4>
          <ForumAddAnswerBox />
        </div>
      </div>
    );
  }
});