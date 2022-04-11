import React from "react";

export default class TodoList extends React.Component {
  //Need to pass props so this component has access to state.
  render() {
    return (
      <div>
        TodoList:
        <ul>
          {this.props.todos.map((todo) => {
            return (
              <li>
                {todo.name} {todo.finished ? <span>Finished</span> : <span></span>}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
