import * as React from 'react';
import {Author} from '../../api/authorApi';

export interface AuthorListProps {
  authors: Author[];
}

interface AuthorListState {
  authors: Author[];
}


export class AuthorList extends React.Component<AuthorListProps, {}> {

  static propTypes = {
    authors: React.PropTypes.array.isRequired
  }

  constructor(props: AuthorListProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {this.props.authors.map(this.createAuthorRow, this) }
          </tbody>
        </table>
      </div>
    );
  }

  private createAuthorRow(author: Author) {
    return (
      <tr key={author.id}>
        <td><a href={"/#authors/"+author.id}>{author.id}</a></td>
        <td><a href={"/#authors/"+author.id}>{author.firstName} {author.lastName}</a></td>
      </tr>
    );
  }

}