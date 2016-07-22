import * as React from 'react';
import { ForumHeader } from './forumHeader';

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

    return React.createElement(
      'div',
       null,
       React.createElement(ForumHeader, { answers: this.state.allAnswers })
       );

  }
});