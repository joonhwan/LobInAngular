import * as React from 'react';
import {
  Router,Route,
  Redirect, 
  IndexRoute, 
  hashHistory, browserHistory 
} from 'react-router';

import {App}          from './app';
import {HomePage}     from './homePage';
import {AboutPage}    from './about/aboutPage';
import {AuthorsPage}  from './authors/authorsPage';
import {NotFoundPage} from './notFoundPage';

let redirectMap = {
  "about-us" : "about",
  "authours" : "authors"
};
let redirects = [];
for(var key in redirectMap) {
  console.log(`${key} ---> ${redirectMap[key]}`);
  redirects.push(<Redirect key={key} from={key} to={redirectMap[key]} />);
}

function onEnterAbout(location, replaceWith) {
  console.log(`onEnterAbount(${location}, ${replaceWith})`);
}

function onLeaveAbout() {
  console.log("onLeaveAbout().");
}

// DefaultRoute 는 IndexRoute 로 바뀜.
// RouteHandler는 Router로 바뀜?
// NotFoundRoute는 제거됨.(see: http://bit.ly/2a7PW7n)
// (Index)Route, Redirect, Route path="*" 의 순서가 중요한듯?
export const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="about" component={AboutPage} onEnter={onEnterAbout} onLeave={onLeaveAbout}/>
      <Route path="authors" component={AuthorsPage} />
      {redirects}
      <Route path="*" component={NotFoundPage} />
    </Route>
  </Router>
);
