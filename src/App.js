import React, { Component } from "react";
import { BaseStyles } from "@primer/components";
import uuid from "uuid";

import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
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
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    };
    const { todos } = this.state;
    this.setState({
      todos: [...todos, newTodo]
    });
  }

  render() {
    return (
      <BaseStyles className="App">
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} />
      </BaseStyles>
    );
  }
}

export default App;
