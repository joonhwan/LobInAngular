import * as React from 'react';
import {Link} from 'react-router';

export class NotFoundPage extends React.Component<{},{}> {
  render() {
    return (
      <div>
        <h1>Non existing page!!!!</h1>
        <p>Whoos!sorry</p>
        <Link to="/" className="btn btn-primary btn-lg">Go to Home</Link>
      </div>
    );
  }
} 