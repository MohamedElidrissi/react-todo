import React, { Component } from "react";
import { BaseStyles } from "@primer/components";
import uuid from "uuid";

import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(title) {
    const todo = {
      id: uuid.v4(),
      title,
      completed: false
    };
    this.state.todos.push(todo);
  }

  render() {
    return (
      <BaseStyles className="App">
        <Header />
        <AddTodo addTodo={this.addTodo} />
      </BaseStyles>
    );
  }
}

export default App;
