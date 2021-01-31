import { Flex, Input } from "@chakra-ui/react";
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
      <Header />
      <ChatBox />
    </ChatProvider>
  );
}
