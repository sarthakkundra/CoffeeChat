import React from "react";
import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";
import { Router } from "@reach/router";
import Index from "./pages";
import Profile from "./pages/profile";

import {AuthProvider} from './context/authentication/AuthState';

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

function App() {
  return (
    <AuthProvider>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router>
        <Index path="/" />
        <Profile path="/profile" />
      </Router>
    </ChakraProvider>
    </AuthProvider>
  );
}

export default App;
