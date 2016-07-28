import * as React from 'react';
import * as ReactRouter from 'react-router';
import {Author, AuthorApi} from '../../api/authorApi';
import {routerShape} from 'react-router/lib/PropTypes';
import {RouterableFrom} from '../common/withRouter'
import {AuthorList} from './authorList';

let Link = ReactRouter.Link;

export interface IAuthorsProps {
  route:any
}

export interface IAuthorsState {
  authors: Author[];
}

let AuthorsPageClassic = React.createClass<IAuthorsProps, IAuthorsState>({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      authors: []
    };
  },
  componentWillMount() {
    this.context.router.setRouteLeaveHook(
      this.props.route,
      this.routerWillLeave
    )
  },
  componentDidMount() {
    this.setState({
      authors: AuthorApi.getAllAuthors()
    });
  },
  render() {
    return (
      <div>
        <h2>Authors</h2>
        <Link to='author/add' className="btn btn-primary">Add Author</Link>
        <AuthorList authors={this.state.authors}/>
      </div>
    );
  },

  routerWillLeave() {
      return 'You have unsaved information, are you sure you want to leave this page?'
  },
});

interface AuthorsPageContext
{
  router: ReactRouter.RouterOnContext;
}


class AuthorsPageWithRouter extends React.Component<IAuthorsProps, IAuthorsState> {

  static contextTypes: React.ValidationMap<any> = {
    router: routerShape
  }; 
  context: AuthorsPageContext;

  constructor(props: IAuthorsProps, context?:any) {
    super(props, context);

    // set initial state
    this.state = {
      authors: []
    };
  }

  componentDidMount() {
    this.setState({
      authors: AuthorApi.getAllAuthors()
    });
  }

  componentWillMount() {
    this.context.router.setRouteLeaveHook(this.props.route, this.routerWillLeave);
  }

  routerWillLeave:ReactRouter.RouteHook = (location) => {
    
    return '(v2) You have unsaved information, are you sure you want to leave this page?';
  }

  render() {
    return (
      <div>
        <h2>Authors(NewStyle)</h2>
        <AuthorList authors={this.state.authors}/>
      </div>
    );
  }
}


class AuthorsPagePlain extends React.Component<{}, IAuthorsState> {

  constructor(props: {}, context?:any) {
    super(props, context);

    // set initial state
    this.state = {
      authors: []
    };
  }

  componentDidMount() {
    this.setState({
      authors: AuthorApi.getAllAuthors()
    });
  }

  render() {
    return (
      <div>
        <h2>Authors(NewStyle)</h2>
        <Link to='author/add' className="btn btn-primary">Add Author</Link>
        <AuthorList authors={this.state.authors}/>
      </div>
    );
  }
}

// interface RouteOwner {
//   route:any;
// }

// abstract class RouteHookableComponent<P, S> extends React.Component<P & RouteOwner,S> {
//   static contextTypes: React.ValidationMap<any> = {
//     router: routerShape
//   }
//   context: { router:ReactRouter.RouterOnContext }
//   constructor(props:P & RouteOwner, context?:any) {
//     super(props, context);
//   }
//   abstract routeLeaveHook(nextLocation):any;
// }



let AuthorsPageHocRouter = RouterableFrom(AuthorsPagePlain
, (nextLocation) => {
  //console.log('self state = ' + JSON.stringify(self.state.authors));
  return "hoc. confirm?";
});

export {
//AuthorsPageClassic as AuthorsPage
//AuthorsPageWithRouter as AuthorsPage
//AuthorsPageHocRouter as AuthorsPage
AuthorsPagePlain as AuthorsPage
};