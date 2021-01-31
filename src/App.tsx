import React from "react";
import {
  ChakraProvider,
  extendTheme,
  ColorModeScript,
  CSSReset,
} from "@chakra-ui/react";
import { Router } from "@reach/router";
import Index from "./pages";
import Profile from "./pages/profile";

import AuthProvider from "./context/authentication/AuthContext";
import Connect from "./pages/connect";
import Login from "./pages/login";
import Chat from "./pages/chat";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

function App() {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
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
    </AuthProvider>
  );
}

export default App;
