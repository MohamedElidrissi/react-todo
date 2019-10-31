import React, { Component } from "react";
import { Text } from "@primer/components";

export class About extends Component {
  render() {
    return (
      <div>
        <Text p={2}>This is a todo app built with React and Redux</Text>
      </div>
    );
  }
}

export default About;
