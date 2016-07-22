import * as React from 'react';

export const ForumAddAnswerBox = React.createClass({
  render() {
    return (
      <div>
        <textarea className="col-md-6 col-xs-8">
        </textarea>
        <input type="button" className="btn btn-primary" value="Add" />
      </div>
    );
  }
});