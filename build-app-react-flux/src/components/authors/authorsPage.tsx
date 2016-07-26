import * as React from 'react';
import * as ReactRouter from 'react-router';
import {Author, AuthorApi} from '../../api/authorApi';
import {AuthorList} from './authorList';

let Link = ReactRouter.Link;

export interface IAuthorsProps {
  router: ReactRouter.RouterOnContext
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
      return null;// return 'You have unsaved information, are you sure you want to leave this page?'
  },
});


class AuthorsPageNewStyle extends React.Component<IAuthorsProps, IAuthorsState> {

  contextTypes: {
    router: any
  }; 
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
    this.props.router.setRouteLeaveHook(this.props.router, this.routerWillLeave);
  }

  routerWillLeave() {
    return 'You have unsaved information, are you sure you want to leave this page?';
  }

  render() {
    return (
      <div>
        <h2>Authors</h2>
        <AuthorList authors={this.state.authors}/>
      </div>
    );
  }
}

export {
AuthorsPageClassic as AuthorsPage
};