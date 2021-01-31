import React from "react";
import {
  ChakraProvider,
  extendTheme,
  ColorModeScript,
  CSSReset,
  theme,
} from "@chakra-ui/react";
import { Router } from "@reach/router";
import Index from "./pages";
import Profile from "./pages/profile";
import AuthProvider from "./context/authentication/AuthContext";
import Connect from "./pages/connect";
import Login from "./pages/login";
import Chat from "./pages/chat";
import UserProvider from "./context/user/UserReducer";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const customTheme = extendTheme(
  {
    config,
  },
  theme
);

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <ChakraProvider theme={customTheme}>
          <CSSReset />
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Router>
            <Index path="/" />
            <Login path="/login" />
            <Profile path="/profile" />
            <Connect path="/connect" />
            <Chat path="/chat/:roomId" />
          </Router>
        </ChakraProvider>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
