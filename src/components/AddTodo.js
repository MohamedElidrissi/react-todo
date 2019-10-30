import React, { Component } from "react";
import {
  BorderBox,
  ButtonPrimary,
  Flex,
  Grid,
  TextInput
} from "@primer/components";

export class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = { todoTitle: "" };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.addTodo(this.state.todoTitle);
    this.setState({ todoTitle: "" });
  }

  onChange(e) {
    this.setState({ todoTitle: e.target.value });
  }

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
        <BorderBox my={4} p={4} style={{ gridColumn: "2/3" }}>
          <Flex as="form" flexDirection="column" onSubmit={this.onSubmit}>
            <TextInput
              placeholder="e.g. Learn React"
              value={this.state.todoTitle}
              onChange={this.onChange}
            />
            <ButtonPrimary mt={2}>Add Todo</ButtonPrimary>
          </Flex>
        </BorderBox>
      </Grid>
    );
  }
}

export default AddTodo;
