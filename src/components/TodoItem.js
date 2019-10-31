import React, { Component } from "react";
import PropTypes from "prop-types";
import { ButtonDanger, Flex, Text } from "@primer/components";

export class TodoItem extends Component {
  TitleStyle = () => {
    return {
      flex: "auto",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    const { todo } = this.props;
    return (
      <Flex alignItems="center">
        <input
          type="checkbox"
          checked={this.props.todo.completed}
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

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default TodoItem;
