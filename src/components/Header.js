import React, { Component } from "react";
import { Box, Flex, Heading, Link } from "@primer/components";

export class Header extends Component {
  render() {
    return (
      <Flex
        as="header"
        bg="#333"
        color="#fff"
        flexDirection="column"
        alignItems="center"
        py={4}
      >
        <Box display="inline-block">
          <Heading display="inline-block">TodoList</Heading>
        </Box>
        <Box as="nav" pt={2}>
          <Link style={LinkStyle} mr={2}>
            Home
          </Link>
          |
          <Link style={LinkStyle} ml={2}>
            About
          </Link>
        </Box>
      </Flex>
    );
  }
}

const LinkStyle = {
  color: "#fff",
  cursor: "pointer"
};

export default Header;
