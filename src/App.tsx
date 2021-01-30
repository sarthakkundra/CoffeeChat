import React from "react";
import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";
import { Router } from "@reach/router";
import Index from "./pages";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router>
        <Index path="/" />
      </Router>
    </ChakraProvider>
  );
}

export default App;
