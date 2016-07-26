import * as React from 'react';

export class AboutPage extends React.Component<{},{}> {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>
          Stack used in this app 
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>Flux</li>
            <li>Node</li>
            <li>Webpack</li>
          </ul>
        </p>
      </div>
    );
  }
};
