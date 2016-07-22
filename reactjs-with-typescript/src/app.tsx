import * as React from 'react';
import * as ReactDOM from 'react-dom';

var Button = React.createClass({
  getInitialState: function() {
    return { counter: 0}
  },
  handleClick: function() {
    this.setState({ counter:this.state.counter+1 });
  },
	render: function() {
		return (
      <div>
        <h3>Click Button</h3>
        <button onClick={this.handleClick}>counter = {this.state.counter}</button>
      </div> 
    )
	},
});

ReactDOM.render(<Button />, document.getElementById('root'));

// const Hello = (props: {compiler: string, framework: string }) => {
//   return (
//     <div>
//       <div>{props.compiler}</div>
//       <div>{props.framework}</div>
//     </div>
//   );
// }

// ReactDOM.render(
//   <Hello compiler="TypeScript" framework="React" /> ,
//   document.getElementById("root")
// );
