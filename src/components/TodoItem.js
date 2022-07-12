import React from "react";

import classes from "./TodoItem.module.css";

const TodoItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <div className={classes.item} onClick={deleteHandler}>
      {props.children}
    </div>
  );
};

export default TodoItem;
