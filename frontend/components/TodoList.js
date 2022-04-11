import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  //Need to pass props so this component has access to state.

  return (
    <div>
      TodoList:
      <div>
        {props.todos.map((todo) => {
          return <Todo toggleTodo={props.toggleTodo} key={todo.id} todo={todo} />;
        })}
      </div>
    </div>
  );
};

export default TodoList;
