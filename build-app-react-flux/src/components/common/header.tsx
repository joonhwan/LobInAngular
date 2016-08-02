import * as React from 'react';
import {Link} from 'react-router';
import {Navbar, Nav, NavItem} from 'react-bootstrap'; 

let logoUrl = require('src/images/ps-logo-with-icon-horiz.png');

// class NavLink extends React.Component<ReactRouter.LinkProps, {}> {
//   render() {
//     let props = this.props;
//     return (
//       <div>
//         <Link {...props} />
//       </div>
//     );
//   }
// }
let NavLink = React.createClass<ReactRouter.LinkProps, {}>({
  render() {
    return (
      <li role="presentation">
        <Link {...this.props} activeClassName="active"/>
      </li>
    )
  }
});

const plainHtmlNavbar =(
   <div className="navbar navbar-default">
    <a className="navbar-brand" href="#">
      <img src={logoUrl} alt="Pluralsight Logo" height='30' />
    </a>
    <ul className="nav nav-pills">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/authors">Authors</NavLink>
      <NavLink to="/courses">Courses</NavLink>
      <NavLink to="/about">About</NavLink>
    </ul>
  </div>
);

// const reactBs = (
//   <Navbar>
//     <Navbar.Header>
//       <Navbar.Brand>
//         <Link to="/"><img src={logoUrl} alt="Pluralsight Logo" height='30' /></Link>
//       </Navbar.Brand>
//     </Navbar.Header>
//     <Nav bsStyle="pills">
//       <NavItem eventKey={1}><Link to="/">Home</Link></NavItem>
//       <NavItem eventKey={2}><Link to="/authors">Authors</Link></NavItem>
//       <NavItem eventKey={3}><Link to="/about">About</Link></NavItem>
//     </Nav>
//   </Navbar>
// );

export class Header extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        {plainHtmlNavbar}
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

