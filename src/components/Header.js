import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Flex, Heading, Link } from "@primer/components";

const Header = () => {
  return (
    <Flex
      as="header"
      bg="#333"
      color="#fff"
      flexDirection="column"
      alignItems="center"
      py={4}
    >
      <Box>
        <Heading>TodoList</Heading>
      </Box>
      <Box as="nav" pt={2}>
        <Link as={RouterLink} to="/" style={LinkStyle} mr={2}>
          Home
        </Link>
        |
        <Link as={RouterLink} to="/about" style={LinkStyle} ml={2}>
          About
        </Link>
      </Box>
    </Flex>
  );
};

const LinkStyle = {
  color: "#fff",
  cursor: "pointer"
};

export default Header;
