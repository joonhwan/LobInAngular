import * as React from 'react';
import {Author} from '../../api/authorApi';
import {AuthorForm} from './authorForm';
import {AuthorActions} from '../../actions/authorActions';
import {AuthorStore} from '../../stores/authorStore';
import {WithRouter, IHaveRouterOnContext} from '../common/withRouter';
import 'toastr/build/toastr.min.css'
import * as toastr from 'toastr';

interface Props extends IHaveRouterOnContext {
  author?: Author;
}

interface States {
  author: Author;
  isDirty: boolean;
}

export class _ManageAuthorPage extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
    //console.log("AuthorForm constructor() props=" + JSON.stringify(this.props));
    let initialAuthor = {
      id: '',
      firstName: '',
      lastName: '',
    };
    this.state = {
      author: props.author || {
        id: '',
        firstName: '',
        lastName: ''
      },
      isDirty: false
    };
  }

  wasEditing() {
    return this.props.route.path=="author/edit/:id";
  }

  componentWillMount() {
    // console.log("AuthorForm willMount() props=" + JSON.stringify(this.props));
    if(this.wasEditing()) {
      let id = this.props.params.id;
      if(id) {
        this.setState({
          //author: AuthorApi.getAuthorById(id),
          author: AuthorStore.getAuthorById(id),
          isDirty: true
      });
      }
    }

    let route = this.props.route;
    this.props.router.setRouteLeaveHook(route, (nextLocation) => this.routerWillLeave(nextLocation));
  }

  render() {
    return (
      <div>
        <h2>Manage Author Page</h2>
        <AuthorForm
          author={this.state.author}
          onChange={author => this.updateAuthor(author) }
          onSaveClicked={ () => this.saveAuthor() }
          />
      </div>
    )
  }
  updateAuthor(author: Author) {
    //console.log('onChange : ' + JSON.stringify(author));
    this.setState({
      author: author,
      isDirty: true
    });
  }
  saveAuthor() {
    console.log('saving author : ' + JSON.stringify(this.state.author));
    let author = this.state.author;

    //AuthorApi.saveAuthor(author);
    if(this.wasEditing()) {
      AuthorActions.updateAuthor(author);
    } else {
      AuthorActions.createAuthor(author);
    }

    console.log('redirecting...');
    this.setState({
      author: author,
      isDirty: false
    }, () => {
      this.props.router.push("authors");
      toastr.success(`Saved new author "${author.firstName} ${author.lastName}" !`);
    });
  }
  private routerWillLeave(nextLocation) {
    console.log('routerWillLeave() @ isDirty = ' + this.state.isDirty);
    if (this.state.isDirty) {
      return "Really Leave?";
    }
  }
}

export let ManageAuthorPage = WithRouter(_ManageAuthorPage);