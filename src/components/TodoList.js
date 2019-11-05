import React, { useContext, useEffect } from "react";
import { BorderBox, Grid } from "@primer/components";
import TodoItem from "./TodoItem";
import TodoContext from "../context/todo/todoContext";

const TodoList = () => {
  const { todos, fetchTodos } = useContext(TodoContext);

  useEffect(() => {
    fetchTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </BorderBox>
      )}
    </Grid>
  );
};

export default TodoList;
