import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BaseStyles } from "@primer/components";
import uuid from "uuid";

import About from "./pages/About";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=30")
      .then(res => res.json())
      .then(setTodos);
  }, []);

  const addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleComplete = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const deleteTodo = id => setTodos(todos.filter(todo => todo.id !== id));

  return (
    <BaseStyles className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/about" component={About} />
          <Route
            path="/"
            render={() => (
              <Fragment>
                <AddTodo addTodo={addTodo} />
                <TodoList
                  todos={todos}
                  toggleComplete={toggleComplete}
                  deleteTodo={deleteTodo}
                />
              </Fragment>
            )}
          />
        </Switch>
      </Router>
    </BaseStyles>
  );
};

export default App;
