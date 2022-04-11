import React from "react";

const Todo = (props) => {
  return (
    <div>
      {props.todo.name} {props.todo.finished ? "😎" : ""}
    </div>
  );
};
export default Todo;
