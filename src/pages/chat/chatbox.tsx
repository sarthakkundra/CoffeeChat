import { Box, Flex, Heading, IconButton, Input, Text } from "@chakra-ui/react";
import { RouteComponentProps } from "@reach/router";
import { send } from "process";
import React, { useEffect, useRef, useState } from "react";
import { useChat } from "../../context/ChatProvider";
import { Send } from "@emotion-icons/boxicons-regular";
import ChannelList from "./channelList";
import { useAuth } from "../../context/authentication/AuthContext";
import withAuth from "../../hocs/withAuth";

export default withAuth(function ChatBox() {
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
    <Flex overflow="auto" h="100%">
      <ChannelList />
      <Flex
        flex={4}
        direction="column"
        border="1px solid rgba(0,0,0,0.2)"
        borderRadius={10}
        maxH="100%"
      >
        <Flex
          boxShadow="rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;"
          mb={4}
          p={4}
          direction="column"
        >
          <Heading size="md">Full Name</Heading>
          <Text size="md">Position</Text>
        </Flex>
        <Flex
          h="100%"
          overflowY="scroll"
          direction="column"
          ref={scrollRef}
          px={4}
        >
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
        <Flex py={4} px={2}>
          <Input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type a message"
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
});
