import React, { useState, useRef } from "react";

import Button from "./UI/Button";
import classes from "./TodoForm.module.css";

const TodoForm = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const ref = useRef(null);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (enteredValue.trim().length === 0) {
      ref.current.focus();
      setIsValid(false);
      return;
    }

    props.onAddTodo(enteredValue);
    setEnteredValue("");
  };

  const onChangeHandler = (e) => {
    setIsValid(true);
    setEnteredValue(e.target.value);
  };

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <input
        ref={ref}
        className={isValid ? classes.input : classes.invalid}
        type="text"
        onChange={onChangeHandler}
        placeholder="Write Todo"
        value={enteredValue || ""}
      />
      <Button>Add Todo</Button>
    </form>
  );
};

export default TodoForm;
