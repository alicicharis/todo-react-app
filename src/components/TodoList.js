import React from "react";
import TodoItem from "./TodoItem";

import classes from "./TodoList.module.css";

const TodoList = (props) => {
  return (
    <div className={classes.list}>
      {props.todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} onDelete={props.onDeleteItem}>
          {todo.text}
        </TodoItem>
      ))}
    </div>
  );
};

export default TodoList;
