import * as React from 'react';

let logoUrl = require('src/images/ps-logo-with-icon-horiz.png');

export class Header extends React.Component<{}, {}> {
  render() {
    return (
      <div className="navbar">
        <a className="navbar-brand" href="#">
          <img src={logoUrl} alt="Pluralsight Logo" height='30' />
        </a>
        <ul className="nav navbar-nav">
          <li className="active">
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="/#authors">Authors</a>
          </li>
          <li>
            <a href="/#about">About</a>
          </li>
        </ul>
      </div>
    );
  }
}

