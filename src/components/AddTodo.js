import React, { useState, useContext } from "react";
import TodoContext from "../context/todo/todoContext";
import {
  BorderBox,
  ButtonPrimary,
  Flex,
  Grid,
  TextInput
} from "@primer/components";

const AddTodo = () => {
  const { addTodo } = useContext(TodoContext);

  const [title, setTitle] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    addTodo(title);
    setTitle("");
  };

  const onChange = e => setTitle(e.target.value);

  return (
    <Grid
      gridTemplateColumns={[
        "auto 80% auto",
        "auto 70% auto",
        "auto 60% auto",
        "auto 50% auto"
      ]}
    >
      <BorderBox my={4} p={4} style={{ gridColumn: "2/3" }}>
        <Flex as="form" flexDirection="column" onSubmit={onSubmit}>
          <TextInput
            placeholder="e.g. Learn React"
            value={title}
            onChange={onChange}
          />
          <ButtonPrimary mt={2}>Add Todo</ButtonPrimary>
        </Flex>
      </BorderBox>
    </Grid>
  );
};

export default AddTodo;
