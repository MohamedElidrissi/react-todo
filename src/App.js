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

    this.state = { todos: [] };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  async componentDidMount() {
    const todos = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=30"
    ).then(res => res.json());
    this.setState({ todos });
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

  toggleComplete = id => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  deleteTodo(id) {
    const { todos } = this.state;
    this.setState({ todos: todos.filter(todo => todo.id !== id) });
  }

  render() {
    return (
      <BaseStyles className="App">
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <TodoList
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}
          deleteTodo={this.deleteTodo}
        />
      </BaseStyles>
    );
  }
}

export default App;
