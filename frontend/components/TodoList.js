import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  //Need to pass props so this component has access to state.
  render() {
    return (
      <div>
        TodoList:
        <div>
          {this.props.todos.map((todo) => {
            return <Todo key={todo.id} todo={todo} />;
          })}
        </div>
      </div>
    );
  }
}
