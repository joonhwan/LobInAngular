import * as React from 'react';
import {Link} from 'react-router';

export class HomePage extends React.Component<{}, {}> {
  render() {
    return (
      <div className='jumbotron'>
        <h1>React App</h1>
        <p>React, React Router and Flux</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn More...</Link>
      </div>
    );
  }
};