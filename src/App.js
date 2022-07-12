import React, { Fragment, useState } from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import classes from "./App.module.css";
import Card from "./components/UI/Card";

const App = () => {
  const [todos, setTodos] = useState([
    { text: "Do homework", id: Math.floor(Math.random() * 10000) },
    { text: "Study", id: Math.floor(Math.random() * 10000) },
  ]);

  const addTodoHandler = (enteredText) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos.unshift({
        text: enteredText,
        id: Math.floor(Math.random() * 10000),
      });
      return updatedTodos;
    });
  };

  const deleteTodoHandler = (todoId) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo) => todo.id !== todoId);
      return updatedTodos;
    });
  };

  return (
    <Fragment>
      <section className={classes.todos}>
        <Card>
          <h1 className={classes.h1}>Todo App</h1>
          <TodoForm onAddTodo={addTodoHandler} />
          <TodoList todos={todos} onDeleteItem={deleteTodoHandler} />
        </Card>
      </section>
    </Fragment>
  );
};

export default App;
