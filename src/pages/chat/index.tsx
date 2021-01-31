import { Box, Flex, Input } from "@chakra-ui/react";
import { RouteComponentProps } from "@reach/router";
import React from "react";
import Header from "../../components/header";
import ChatProvider from "../../context/ChatProvider";
import ChatBox from "./chatbox";

interface ChatRoomProps {
  roomId?: string;
}

type ChatProps = RouteComponentProps & ChatRoomProps;

export default function Chat(props: ChatProps) {
  return (
    <ChatProvider roomId={props.roomId}>
      <Flex pos="fixed" h="100vh" direction="column" w="100%">
        <Box>
          <Header />
        </Box>
        <Box maxH="80%">
          <ChatBox />
        </Box>
      </Flex>
    </ChatProvider>
  );
}
