import { Button, Flex, Heading } from "@chakra-ui/react";
import { RouteComponentProps } from "@reach/router";
import React from "react";
import Header from "../components/header";
import "firebase/app";
import "firebase/auth";
import { useLoginWithGoogle } from "../context/authentication/AuthContext";

export default function Login(props: RouteComponentProps) {
  const { login } = useLoginWithGoogle();

  const onGoogleSignIn = async () => {
    login();
  };

  return (
    <>
      <Header />
      <Flex justifyContent="center">
        <Flex direction="column">
          <Heading py={10}>Login to CoffeeChat</Heading>
          <Button variant="outline" onClick={onGoogleSignIn}>
            Sign in with Google
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
