import * as React from 'react';
import {Author} from '../../api/authorApi';

interface Props {
  author:Author;
  onChange: React.FormEventHandler;
}

interface States {
  author:Author;
}

export class AuthorForm extends React.Component<Props, States> {
  constructor(props:Props) {
    super(props);
    this.state = {
      author: props.author
    }
  }
  render() {
    return (
      <div>
        <form action="" method="POST" role="form">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" className="form-control" 
              id="firstName" placeholder="First Name" 
              value={this.state.author.firstName}
              onChange={this.props.onChange} />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" className="form-control" 
              id="lastName" placeholder="Last Name"
              value={this.state.author.lastName}
              onChange={this.props.onChange} />
          </div>
          <br />
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  }
}