import * as React from 'react';
import {Author, AuthorApi} from '../../api/authorApi';

function createAuthorRow(author:Author)
{
  return (
    <tr key={author.id}>
      <td>{author.id}</td>
      <td>{author.firstName} {author.lastName}</td>
    </tr>
  );
}

export interface IAuthorsProps {
}

export interface IAuthorsState {
  authors:Author[];
}

export class Authors extends React.Component<IAuthorsProps, IAuthorsState> {

  constructor(props: IAuthorsProps) {
    super(props);

    // set initial state
    this.state = {
      authors: []
    };
  }

  componentWillMount() {
    this.setState({ 
      authors: AuthorApi.getAllAuthors()
    });
  }

  render() {
    return(
      <div>
        <h2>Authors</h2>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {this.state.authors.map(createAuthorRow, this)}
          </tbody>
        </table>
      </div>
    );
  }
}
