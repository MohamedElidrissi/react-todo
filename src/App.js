import React, { Component } from "react";
import { BaseStyles } from "@primer/components";

import Header from "./components/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BaseStyles className="App">
        <Header />
      </BaseStyles>
    );
  }
}

export default App;
