import React from "react";

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      todoName: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      todoName: e.target.value,
    });
  };

  handleSumbit = (e) => {
    e.preventDefault();
    this.props.addTodo(e, this.state.todoName);
    this.setState({ todoName: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSumbit}>
        <input type="text" name="todo" value={this.state.todoName} onChange={this.handleChange} />
        <button>Add Todo</button>
      </form>
    );
  }
}
