import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ButtonDanger, Flex, Text } from "@primer/components";
import TodoContext from "../context/todo/todoContext";

const TodoItem = ({ todo }) => {
  const { deleteTodo, toggleComplete } = useContext(TodoContext);

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
      />
      <Text as="p" ml={2} style={TitleStyle()}>
        {todo.title}
      </Text>
      <ButtonDanger onClick={deleteTodo.bind(null, todo.id)}>x</ButtonDanger>
    </Flex>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
