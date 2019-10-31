import React, { Component } from "react";
import { BorderBox, Grid } from "@primer/components";

import TodoItem from "./TodoItem";

export class TodoList extends Component {
  render() {
    return (
      <Grid
        gridTemplateColumns={[
          "auto 80% auto",
          "auto 70% auto",
          "auto 60% auto",
          "auto 50% auto"
        ]}
      >
        {/* Avoid showing the BorderBox element when there is no todos */}
        {this.props.todos.length > 0 && (
          <BorderBox px={4} style={{ gridColumn: "2/3" }}>
            {this.props.todos.map(todo => {
              return (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  toggleComplete={this.props.toggleComplete}
                  deleteTodo={this.props.deleteTodo}
                />
              );
            })}
          </BorderBox>
        )}
      </Grid>
    );
  }
}

export default TodoList;
