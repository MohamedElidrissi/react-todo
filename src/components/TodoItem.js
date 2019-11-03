import React from "react";
import PropTypes from "prop-types";
import { ButtonDanger, Flex, Text } from "@primer/components";

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  const TitleStyle = () => {
    return {
      flex: "auto",
      textDecoration: todo.completed ? "line-through" : "none"
    };
  };

  return (
    <Flex alignItems="center">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggleComplete.bind(this, todo.id)}
      ></input>
      <Text as="p" ml={2} style={TitleStyle()}>
        {todo.title}
      </Text>
      <ButtonDanger onClick={deleteTodo.bind(null, todo.id)}>x</ButtonDanger>
    </Flex>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default TodoItem;
