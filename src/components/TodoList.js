import React, { Component } from "react";
import { BorderBox, Box, Grid, Text } from "@primer/components";

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
                <Box key={todo.id}>
                  <Text as="p" display="inline-block">
                    {todo.title}
                  </Text>
                </Box>
              );
            })}
          </BorderBox>
        )}
      </Grid>
    );
  }
}

export default TodoList;
