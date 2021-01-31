import { Flex, IconButton, Input } from "@chakra-ui/react";
import { RouteComponentProps } from "@reach/router";
import { send } from "process";
import React, { useState } from "react";
import Header from "../../components/header";
import ChatProvider, { useChat } from "../../context/ChatProvider";
import { Send } from "@emotion-icons/boxicons-regular";

export default function ChatBox() {
  const { sendMessage, messages } = useChat();
  const [inputText, setInputText] = useState("");

  const sendMessageButton = (text: string) => {
    sendMessage(text);
  };

  return (
    <Flex
      maxW="3xl"
      m="auto"
      direction="column"
      h="60vh"
      justifyContent="space-between"
    >
      <Flex direction="column">
        {messages.map((message) => {
          return <Flex>{message.text}</Flex>;
        })}
      </Flex>
      <Flex>
        <Input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <IconButton
          p={1}
          aria-label="Send"
          icon={<Send color="#582C4D" />}
          variant="ghost"
          isRound
          onClick={() => {
            sendMessageButton(inputText);
            setInputText("");
          }}
        />
      </Flex>
    </Flex>
  );
}
