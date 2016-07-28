import * as React from 'react';
import {Author, AuthorApi} from '../../api/authorApi';
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
        <AuthorForm 
          author={this.state.author} 
          onChange={author => this.updateAuthor(author)} 
          onSaveClicked={ () => this.saveAuthor() } 
          route={null}/>
      </div>
    )
  }
  updateAuthor(author:Author) {
    //console.log('onChange : ' + JSON.stringify(author));
    this.setState({
      author: author
    });
  }
  saveAuthor() {
    console.log('saving author : ' + JSON.stringify(this.state.author));
    AuthorApi.saveAuthor(this.state.author);
  }
  
}