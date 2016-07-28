import * as React from 'react';

interface TextInputProps {
  name: string;
  label: string;
  text: string;
  placeHolder?: string;
  errors?: string[];
  onTextChange(text:string):void;
}

export class TextInput extends React.Component<TextInputProps, {}> {
  
  constructor(props:TextInputProps, context?:any) {
    super(props, context);
  }
  render() {
    let className = 'form-group';
    let errorMessages = [];
    console.log(`TextInput '${this.props.name}' errors=${this.props.errors ? this.props.errors.length : 0}`)
    if(this.props.errors && this.props.errors.length > 0) {
      className += ' has-error';
      this.props.errors.map((error, index) => {
        errorMessages.push(<span key={index} className='help-block'>{error}</span>)
      })
    } else {
      className += ' has-success';
    }

    return (
      <div className={className}>
        <label htmlFor={name}>{this.props.label}</label>
        <input type="text" className="form-control"
          name={this.props.name} placeholder={this.props.placeHolder}
          value={this.props.text}
          onChange={e => {
            let text = "" + (e.target as any).value;
            this.props.onTextChange(text) 
          }} />
        {errorMessages}
      </div>
    );
  }

}