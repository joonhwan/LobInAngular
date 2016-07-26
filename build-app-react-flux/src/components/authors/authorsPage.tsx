import * as React from 'react';
import {Author, AuthorApi} from '../../api/authorApi';
import {AuthorList} from './authorList';

export interface IAuthorsProps {
}

export interface IAuthorsState {
  authors:Author[];
}

export class AuthorsPage extends React.Component<IAuthorsProps, IAuthorsState> {

  constructor(props: IAuthorsProps) {
    super(props);

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
    return(
      <div>
        <h2>Authors</h2>
        <AuthorList authors={this.state.authors}/>
      </div>
    );
  }
}
