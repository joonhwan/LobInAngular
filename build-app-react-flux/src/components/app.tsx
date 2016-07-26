import * as React from 'react';
import {Header} from './common/header';
import {Router, Route, IndexRoute, hashHistory } from 'react-router';
import {routes} from './routes';

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
      </div>
    )
  }
}
