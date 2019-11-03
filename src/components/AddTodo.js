import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  BorderBox,
  ButtonPrimary,
  Flex,
  Grid,
  TextInput
} from "@primer/components";

const AddTodo = ({ addTodo }) => {
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

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default AddTodo;
