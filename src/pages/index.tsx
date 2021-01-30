import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { RouteComponentProps } from "@reach/router";
import Header from "../components/header";

export default function Index(props: RouteComponentProps) {
  return (
    <>
      <Header />
      <Flex
        justifyContent="center"
        alignItems="center"
        h="80vh"
        px={10}
        backgroundColor="gray.200"
      >
        <Heading>Big Title</Heading>
      </Flex>
    </>
  );
}
