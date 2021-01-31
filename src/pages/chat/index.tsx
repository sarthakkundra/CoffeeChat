import { Flex, Input } from "@chakra-ui/react";
import { RouteComponentProps } from "@reach/router";
import React from "react";
import Header from "../../components/header";

interface ChatRoomProps {
  roomId?: string;
}

type ChatProps = RouteComponentProps & ChatRoomProps;

export default function Chat(props: ChatProps) {
  return (
    <>
      <Header />
      <Flex
        maxW="3xl"
        m="auto"
        direction="column"
        h="60vh"
        justifyContent="space-between"
      >
        <Flex>{props.roomId}</Flex>

        <Input />
      </Flex>
    </>
  );
}
