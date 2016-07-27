import * as React from 'react';
import {Author} from '../../api/authorApi';
import {clone} from '../common/utils';


interface Props {
  author:Author;
  onChange: (author:Author) => void;
}

interface State {
  author:Author;
}

export class AuthorForm extends React.Component<Props, State> {
  author:Author;

  constructor(props:Props) {
    super(props);
    this.author = props.author;
    this.state = {
      author:props.author
    };
  }
  
  render() {
    return (
      <div>
        <form action="" method="POST" role="form">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" className="form-control" 
              name="firstName" placeholder="First Name" 
              value={this.props.author.firstName}
              onChange={e => this.onFirstNameChanged(e)} />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" className="form-control" 
              name="lastName" placeholder="Last Name"
              value={this.props.author.lastName}
              onChange={e => this.onLastNameChanged(e)} />
          </div>
          <br />
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  }

  onFirstNameChanged(e) {
    let updated = clone(this.state);
    updated.author.firstName = e.target.value;
    // console.log('onFirstNameChanged : ' + JSON.stringify(updated));
    this.setState(updated);
    this.props.onChange(updated.author);
  }
  onLastNameChanged(e) {
    let updated = clone(this.state);
    updated.author.lastName = e.target.value;
    // console.log('onLastNameChanged : ' + JSON.stringify(updated));
    this.setState(updated);
    this.props.onChange(updated.author);
  }
  
}