import React, { Component } from "react";
import { ButtonDanger, Flex, Text } from "@primer/components";

export class TodoItem extends Component {
  TitleStyle = () => {
    return {
      flex: "auto",
      textDecoration: this.props.todo.isComplete ? "line-through" : "none"
    };
  };

  render() {
    const { todo } = this.props;
    return (
      <Flex alignItems="center">
        <input
          type="checkbox"
          value={todo.isComplete}
          onChange={this.props.toggleComplete.bind(this, todo.id)}
        ></input>
        <Text as="p" ml={2} style={this.TitleStyle()}>
          {todo.title}
        </Text>
        <ButtonDanger onClick={this.props.deleteTodo.bind(null, todo.id)}>
          x
        </ButtonDanger>
      </Flex>
    );
  }
}

export default TodoItem;
