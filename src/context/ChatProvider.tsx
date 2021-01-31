import React, { useContext, useEffect, useState } from "react";
import firebase from "firebase";
import "firebase/firestore";
import { FirebaseAuth } from "react-firebaseui";
import { useAuth } from "./authentication/AuthContext";
import cuid from "cuid";

export interface Message {
  text: string;
  author: string;
}

export interface ChatContext {
  messages: Message[];
  chatRoom:
    | firebase.firestore.DocumentReference<firebase.firestore.DocumentData>
    | undefined;
}

export interface MessageDocumentData extends firebase.firestore.DocumentData {
  messages: any[];
  users: any[];
}

const ChatContext = React.createContext<ChatContext>({
  messages: [],
  chatRoom: undefined,
});

const ChatProvider = ({ children, roomId }: any) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatRoom, setChatRoom] = useState<
    firebase.firestore.DocumentReference<firebase.firestore.DocumentData>
  >();

  const [chatRooms, setChatRooms] = useState<
    firebase.firestore.CollectionReference<firebase.firestore.DocumentData>
  >();

  useEffect(() => {
    const db = firebase.firestore();
    const collection = db.collection("chatrooms");
    const room = collection.doc(roomId);
    setChatRoom(room);
  }, []);

  useEffect(() => {
    if (chatRoom) {
      chatRoom.onSnapshot((snapshot: any) => {
        setMessages(snapshot.data().messages);
      });
    }
  }, [chatRoom]);

  return (
    <ChatContext.Provider
      value={{
        messages,
        chatRoom,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  const { user } = useAuth();
  const sendMessage = (text: string) => {
    const { chatRoom, messages } = context;
    const message = {
      author: user?.uid,
      text,
      timestamp: new Date(Date.now()),
    };
    chatRoom?.update({ messages: [...messages, message] });
  };

  const createRoom = async (userID: string) => {
    const db = firebase.firestore();
    const collection = db.collection("chatrooms");
    const uid = cuid();
    await collection.doc(uid).set({
      messages: [],
      users: [user?.uid, userID],
    });
    return uid;
  };

  const { messages } = context;
  return { messages, sendMessage, createRoom };
};

export default ChatProvider;
