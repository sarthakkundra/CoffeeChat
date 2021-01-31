import React, { useEffect, useState } from "react";
import app from "../firebaseConfig";

export interface Message {
  text: string;
  author: string;
}

export interface ChatContext {
  messages: Message[];
}

const ChatContext = React.createContext<ChatContext>({
  messages: [],
});

const ChatProvider = ({ children, roomId }: any) => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {});

  return (
    <ChatContext.Provider
      value={{
        messages,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
