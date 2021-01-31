import { Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "firebase/firestore";
import firebase from "firebase";
import { useAuth } from "../../context/authentication/AuthContext";
import { useUser } from "../../context/user/UserReducer";
import { navigate } from "@reach/router";

export default function ChannelList() {
  const [chatRooms, setChatRooms] = useState<any>();
  const [isLoading, setLoading] = useState(true);

  const { user } = useAuth();
  const { getUser } = useUser();

  useEffect(() => {
    const db = firebase.firestore();
    db.collection("chatrooms")
      .get()
      .then((collectionSnapshot) => {
        const data = collectionSnapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id } as any;
        });
        const myChats = data.filter((doc) => doc.users.includes(user?.uid));
        Promise.all(
          myChats.map(async (chatRoom: any) => {
            console.log(chatRoom);
            const otherUserID = chatRoom.users.filter((u: any) => {
              return u !== user?.uid;
            })[0];
            const field = await getUser(otherUserID);
            console.log({
              firstName: field?.firstName,
              lastName: field?.lastName,
              position: field?.position,
              id: chatRoom.id,
            });
            return {
              firstName: field?.firstName,
              lastName: field?.lastName,
              position: field?.position,
              id: chatRoom.id,
            };
          })
        ).then((l) => {
          setChatRooms(l);
          setLoading(false);
        });
      });
  }, []);

  if (isLoading) {
    return <></>;
  }

  return (
    <Flex flex={1} direction="column" overflowY="auto" h="100%">
      {chatRooms.map((chatRoom: any) => {
        return (
          <Flex
            direction="column"
            p={4}
            bg="#D5B9B2"
            borderBottom="1px solid #fffa"
            onClick={() => {
              navigate(`/chat/${chatRoom.id}`);
            }}
          >
            <Heading size="md">
              {chatRoom.firstName} {chatRoom.lastName}
            </Heading>
            <Text size="sm">{chatRoom.experience?.jobTitle || ""}</Text>
          </Flex>
        );
      })}
    </Flex>
  );
}
