import * as React from 'react';
import {Author} from '../../api/authorApi';
import {AuthorForm} from './authorForm';

interface Props {
  author?:Author;
}

interface States {
  author:Author;
}

export class ManageAuthorPage extends React.Component<Props, States> {
  constructor(props:Props) {
    super(props);
    this.state = {
      author: props.author || {
        id: '',
        firstName: '',
        lastName: ''
      }
    };
  }
  render() {
    return (
      <div>
        <h2>Manage Author Page</h2>
        <AuthorForm author={this.state.author} onChange={author => this.onChange(author)} />
      </div>
    )
  }
  onChange(author:Author) {
    console.log('onChange : ' + JSON.stringify(author));
    this.setState({
      author: author
    });
  }
}