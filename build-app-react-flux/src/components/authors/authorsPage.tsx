import * as React from 'react';
import * as ReactRouter from 'react-router';
import {Author, AuthorApi} from '../../api/authorApi';
import {routerShape} from 'react-router/lib/PropTypes';
import {IHaveRouterOnContext, WithRouter} from '../common/withRouter'
import {AuthorList} from './authorList';

let Link = ReactRouter.Link;

export interface IAuthorsProps {
  route:any
}

export interface IAuthorsState {
  authors: Author[];
}

class _AuthorsPage extends React.Component<IHaveRouterOnContext, IAuthorsState> {

  constructor(props:any, context?:any) {
    super(props, context);

    // set initial state
    this.state = {
      authors: []
    };
  }

  componentWillMount() {
    console.log('AuthorsPagePlain props = ' + JSON.stringify(this.props));
    if(this.props.router) {
      this.props.router.setRouteLeaveHook(this.props.route, nl => this.routeLeaveHook(nl));
    }
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

  private routeLeaveHook(nl) {
    return "Confirm Request in InnerComponent!";
  }
}

export let AuthorsPage = _AuthorsPage;//WithRouter(_AuthorsPage);