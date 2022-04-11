import React from "react";

const Todo = (props) => {
  return (
    <div>
      {props.todo.name} {props.todo.completed ? "😎" : ""}
    </div>
  );
};
export default Todo;
