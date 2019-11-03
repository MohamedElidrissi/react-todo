import React from "react";
import PropTypes from "prop-types";
import { BorderBox, Grid } from "@primer/components";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
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
      {todos.length > 0 && (
        <BorderBox px={4} style={{ gridColumn: "2/3" }}>
          {todos.map(todo => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
              />
            );
          })}
        </BorderBox>
      )}
    </Grid>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default TodoList;
