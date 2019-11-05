import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BaseStyles } from "@primer/components";

import About from "./pages/About";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoState from "./context/todo/TodoState";
import TodoContext from "./context/todo/todoContext";
import "./App.css";

const App = () => {
  return (
    <BaseStyles className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/about" component={About} />
          <Route
            path="/"
            render={() => (
              <TodoState>
                <TodoContext.Consumer>
                  {() => (
                    <Fragment>
                      <AddTodo />
                      <TodoList />
                    </Fragment>
                  )}
                </TodoContext.Consumer>
              </TodoState>
            )}
          />
        </Switch>
      </Router>
    </BaseStyles>
  );
};

export default App;
