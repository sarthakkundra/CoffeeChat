import { Flex, Heading, IconButton, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useChat } from "../../context/ChatProvider";
import { Send } from "@emotion-icons/boxicons-regular";
import ChannelList from "./channelList";
import { useAuth } from "../../context/authentication/AuthContext";
import withAuth from "../../hocs/withAuth";
import { VideoPlus } from "@emotion-icons/boxicons-solid";
import { navigate } from "@reach/router";
import firebase from "firebase";
import "firebase/firestore";
import { useUser } from "../../context/user/UserReducer";

export default withAuth(function ChatBox(props: any) {
  const { sendMessage, messages } = useChat();
  const { user } = useAuth();
  const { getUser } = useUser();
  const [inputText, setInputText] = useState("");
  const [chatUser, setChatUser] = useState<any>();
  const [isLoading, setLoading] = useState(true);
  const scrollRef = useRef<any>(null);

  const sendMessageButton = (text: string) => {
    sendMessage(text);
  };

  useEffect(() => {
    const db = firebase.firestore();
    db.collection("chatrooms")
      .doc(props.roomId)
      .get()
      .then((snapshot) => {
        const chatRoom = snapshot.data();
        const otherUserID = chatRoom?.users.filter((u: any) => {
          return u !== user?.uid;
        })[0];
        getUser(otherUserID).then((user) => {
          setChatUser(user);
          console.log(user);
          setLoading(false);
        });
      });
  }, [props.roomId]);

  useEffect(() => {
    if (scrollRef && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef?.current?.scrollHeight;
    }
  }, [messages]);

  if (isLoading) {
    return <></>;
  }
  return (
    <Flex overflow="auto" h="100%">
      <ChannelList />
      <Flex
        flex={4}
        mx={4}
        direction="column"
        border="1px solid rgba(0,0,0,0.2)"
        borderRadius={10}
        h="100%"
      >
        <Flex
          boxShadow="rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;"
          justifyContent="space-between"
        >
          <Flex mb={4} p={4} direction="column">
            <Heading size="md">
              {chatUser.firstName} {chatUser.lastName}
            </Heading>
            <Text size="md">{chatUser.experience?.jobTitle || ""}</Text>
          </Flex>
          <Flex mb={4} p={4}>
            <IconButton
              aria-label="video"
              icon={<VideoPlus size="24" />}
              onClick={() => navigate("https://meet.google.com/new")}
            />
          </Flex>
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
                p={4}
                m={1}
                maxW="40%"
                bg={message.author === user?.uid ? "#F8AD9D" : "#DDBEA9"}
                alignSelf={
                  message.author === user?.uid ? "flex-end" : "flex-start"
                }
                borderRadius={10}
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
