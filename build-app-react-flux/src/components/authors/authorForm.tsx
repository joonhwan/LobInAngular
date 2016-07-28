import * as React from 'react';
import {Author} from '../../api/authorApi';
import {clone} from '../common/utils';
import {TextInput} from '../common/textInput';
import {WithRouter, IHaveRouterOnContext} from '../common/withRouter';

interface Props {
  author: Author;
  onChange(author: Author): void;
  onSaveClicked();
  router?:ReactRouter.RouterOnContext;
  route?:any;
}

interface State {
  isDirty: boolean;
  errors: {
    firstName: string[],
    lastName: string[]
  }
}

class _AuthorForm extends React.Component<Props, State> {
  author: Author;

  constructor(props: Props) {
    super(props);
    this.author = props.author;
    this.state = {
      isDirty: false,
      errors: {
        firstName: [],
        lastName: []
      },
    };
  }

  render() {
    return (
      <div>
        <form>
          <TextInput
            name="firstName" label="First Name"
            text={this.props.author.firstName}
            errors={this.state.errors.firstName}
            onTextChange={text => this.updateFirstName(text) } />
          <br />
          <TextInput
            name="lastName" label="Last Name"
            text={this.props.author.lastName}
            errors={this.state.errors.lastName}
            onTextChange={text => this.updateLastName(text) } />
          <br />
          <button className="btn btn-primary"
            onClick={e => this.handleSaveClick(e) }>
            Save
          </button>
        </form>
      </div>
    );
  }

  updateFirstName(text: string) {
    let author = clone(this.props.author);
    author.firstName = text;
    // console.log('onFirstNameChanged : ' + JSON.stringify(updated));
    let errors = this.validateText(text);
    let updated = clone(this.state);
    updated.isDirty = true;
    updated.errors.firstName = errors;
    this.setState(updated);
    this.props.onChange(author);
  }
  updateLastName(text) {
    let author = clone(this.props.author);
    author.lastName = text;
    // console.log('onLastNameChanged : ' + JSON.stringify(updated));
    let errors = this.validateText(text);
    let updated = clone(this.state);
    updated.isDirty = true;
    updated.errors.lastName = errors;
    this.setState(updated);
    this.props.onChange(author);
  }
  handleSaveClick(e: React.MouseEvent) {
    e.preventDefault();
    this.props.onSaveClicked();
  }

  private validateText(text: string): string[] {
    let errors: string[] = [];
    if (!text) {
      errors.push('Empty');
    } else {
      console.log('validate : text.length=' + text.length);
      if (text.length < 3) {
        errors.push('Too short');
      }
      if (text.indexOf(' ') >= 0) {
        errors.push('Contained space');
      }
    }
    return errors;
  }
}

export let AuthorForm = _AuthorForm;
