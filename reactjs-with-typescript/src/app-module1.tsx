import * as React from 'react';
import * as ReactDOM from 'react-dom';

var Button = React.createClass({
  handleClick() {
    this.props.increased(this.props.delta)
  },
	render() {
		return (
      <button onClick={this.handleClick}>{'+' + this.props.delta} </button>
    )
	},
});

var Result = React.createClass({
  render() {
    return (
      <div>Counter = {this.props.counter}</div>
    )
  }
});

var Main = React.createClass({
  getInitialState() {
    return { counter: 0 };
  },

  increaseCounter() {
    this.increaseCounterBy(1);
  },
  increaseCounterBy(inc:number) {
    this.setState({ counter:this.state.counter+inc})
  },
  render() {
    return (
      <div>
        <Button delta={1} increased={this.increaseCounterBy}/>
        <Button delta={5} increased={this.increaseCounterBy}/>
        <Button delta={10} increased={this.increaseCounterBy}/>
        <Button delta={100} increased={this.increaseCounterBy}/>
        <Result counter={this.state.counter} />
      </div> 
    )
  }
});

ReactDOM.render(<Main />, document.getElementById('root'));

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
