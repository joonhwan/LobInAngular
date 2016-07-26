import * as React from 'react';
import {Link} from 'react-router';

let logoUrl = require('src/images/ps-logo-with-icon-horiz.png');

export class Header extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <div className="navbar navbar-default">
          <a className="navbar-brand" href="#">
            <img src={logoUrl} alt="Pluralsight Logo" height='30' />
          </a>
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/authors">Authors</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <ul>
          <li>
            왜 react-router의 hashHistory 에서는 url에?_k=yfarup 값이 붙는가?: <a href="https://github.com/reactjs/react-router/blob/master/docs/guides/Histories.md#what-is-that-_kckuvup-junk-in-the-url">여기</a>에서 확인.
          </li>
          <li>
            <a href="https://css-tricks.com/learning-react-router/">react-router tutorial 확인</a>
          </li>
          <li>
            hashHistory 대신 browserHistory 를 쓰면 url은 깨끗해지지만, web server가 모든 요청을 index.html로 가도록 해야 한단다.
          </li>
        </ul>
      </div>
    );
  }
}

