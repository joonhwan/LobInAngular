import 'bootstrap/dist/css/bootstrap.min.css';
import * as $ from 'jquery';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Header} from './components/common/header';
import {HomePage} from './components/homePage';
import {AboutPage} from './components/about/aboutPage';
import {AuthorsPage} from './components/authors/authorsPage';

require('./favicon.ico');

let selector = document.getElementById('app');

interface AppProps {
  route: string
}

class App extends React.Component<AppProps, {}> {
  render() {
    var Child;
    switch (this.props.route) {
      case 'about': Child = AboutPage; break;
      case 'authors': Child = AuthorsPage; break;
      default: Child = HomePage;
    }
    return (
      <div className="container-fluid">
        <Header />
        <Child />
      </div>
    )
  }
}

function render() {
  let route = window.location.hash.substr(1);
  ReactDOM.render(<App route={route} />, selector);
}
window.addEventListener('hashchange', render);
render();