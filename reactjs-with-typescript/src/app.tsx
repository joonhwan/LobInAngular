import * as $ from 'jquery';
import * as React from 'react';
import * as ReactDOM from'react-dom';

const Card = React.createClass({
  getInitialState() {
    return {};
  },
  componentDidMount() {
    var component = this;
    $.get('https://api.github.com/users/' + this.props.login, function(data) {
      component.setState(data);
    });
  },
  render() {
    return (
      <div>
        <img src={this.state.avatar_url} alt="" width="100" height="100"/>
        <h3>{this.state.name} (created:{this.state.created_at})</h3>
        <hr/>
      </div>
    )
  }
});

var Form = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    var user = this.inputTextBox.value;
    if(user) {
      console.log("you input : " + user);
      this.props.addCard(user);
      this.inputTextBox.value = '';
    }
  },
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input ref={(ref) => this.inputTextBox = ref} placeholder="github username" />
        <button>Add</button>
      </form>
    );
  }
});

const Main = React.createClass({
  getInitialState() {
    return {logins: []};
  },
  addCard(user) {
    console.log("added " + user);
    this.setState({logins:this.state.logins.concat(user)});
  },
  render() {
    var cards = this.state.logins.map(function(login) {
      return (<Card key={login} login={login} />);
    });
    return (
      <div>
        <Form addCard={this.addCard} />
        {cards}
      </div>
    );

    // return (
    //   <div>
    //     <Card login="joonhwan"></Card>
    //     <Card login="petehunt"></Card>
    //   </div>
    // );
  }
});

ReactDOM.render(<Main />, document.getElementById("root"));