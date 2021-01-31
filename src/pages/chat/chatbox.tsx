import { Box, Flex, IconButton, Input, Text } from "@chakra-ui/react";
import { RouteComponentProps } from "@reach/router";
import { send } from "process";
import React, { useEffect, useRef, useState } from "react";
import { useChat } from "../../context/ChatProvider";
import { Send } from "@emotion-icons/boxicons-regular";
import ChannelList from "./channelList";
import { useAuth } from "../../context/authentication/AuthContext";

export default function ChatBox() {
  const { sendMessage, messages } = useChat();
  const { user } = useAuth();
  const [inputText, setInputText] = useState("");

  const scrollRef = useRef<any>(null);

  const sendMessageButton = (text: string) => {
    sendMessage(text);
  };

  useEffect(() => {
    if (scrollRef) {
      scrollRef.current.scrollTop = scrollRef?.current?.scrollHeight;
    }
  }, [messages]);

  return (
    <Flex h="100%" maxW="5xl" py={10} m="auto" overflow="auto">
      <ChannelList />
      <Flex flex={3} direction="column" px={10}>
        <Flex h="100%" overflowY="scroll" direction="column" ref={scrollRef}>
          {messages.map((message) => {
            return (
              <Flex
                p={2}
                m={1}
                maxW="40%"
                bg={message.author === user?.uid ? "#D5B9B2" : "#d5c2b2"}
                alignSelf={
                  message.author === user?.uid ? "flex-end" : "flex-start"
                }
                borderRadius="full"
              >
                <Text>{message.text}</Text>
              </Flex>
            );
          })}
        </Flex>
        <Flex py={8}>
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
    </Flex>
  );
}
