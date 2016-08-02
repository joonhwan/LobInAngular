import * as React from 'react';
import {Link} from 'react-router'
import {Author} from '../../api/authorApi';
import {AuthorActions} from '../../actions/authorActions';

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
              <th></th>
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
    let link = "author/edit/" + author.id;
    return (
      <tr key={author.id}>
        <td><a href="#" onClick={(e:Event) => this.deleteAuthor(e, author.id)}>Delete</a></td>
        <td><Link to={link}>{author.id}</Link></td>
        <td><Link to={link}>{author.firstName} {author.lastName}</Link></td>
      </tr>
    );
  }

  private deleteAuthor(e:Event, id:string) {
    e.preventDefault();
    AuthorActions.deleteAuthorById(id);
    // console.log("Deleting author of id : " + id);
  }

}