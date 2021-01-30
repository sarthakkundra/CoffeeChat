import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { RouteComponentProps } from "@reach/router";
import Header from "../components/header";

export default function Index(props: RouteComponentProps) {
  return (
    <Box>
      <Header />
    </Box>
  );
}
