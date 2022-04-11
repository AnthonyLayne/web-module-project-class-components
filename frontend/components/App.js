import React from "react";

import Form from "./Form";
import TodoList from "./TodoList";

const todos = [
  {
    name: "Organize Garage",
    id: 1528817077286, // could look different, you could use a timestamp to generate it
    completed: false,
  },
  {
    name: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos,
    };
  }

  addTodo = (e, todo) => {
    const newTodo = {
      name: todo,
      id: Date.now(),
      completed: false,
    };
    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
    }));
  };

  toggleTodo = (todoId) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    });
  };

  clearCompletedClick = () => {
    this.setState({
      todos: this.state.todos.filter((todo) => !todo.completed),
    });
  };

  render() {
    return (
      <div className="App">
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
        <Form addTodo={this.addTodo} />
        <button className="clear" onClick={this.clearCompletedClick}>
          Clear Completed Todos
        </button>
      </div>
    );
  }
}
