import React from "react";
import { Box, Button, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { RouteComponentProps, useNavigate } from "@reach/router";
import Header from "../components/header";
import { ReactComponent as Banner } from "../images/banner.svg";
import { ReactComponent as MakeProfile } from "../images/makeprofile.svg";
import { ReactComponent as Connected } from "../images/connected.svg";
import { ReactComponent as Chatting } from "../images/chatting.svg";
import { CheckCircle } from "@emotion-icons/boxicons-solid";

export default function Index(props: RouteComponentProps) {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Flex justifyContent="center" alignItems="center">
        <Banner style={{ width: "100%", height: "auto" }} />
      </Flex>
      <Flex
        py={10}
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Heading size="lg" py={8}>
          As an aspiring woman in tech, you are looking for...
        </Heading>
        <Flex direction="column">
          <Flex alignItems="center" pb={2}>
            <Icon
              as={CheckCircle}
              boxSize="2em"
              color="rgb(231,197,181)"
              mr={4}
            />
            <Text>A role model in the industry/workplace</Text>
          </Flex>
          <Flex alignItems="center" pb={2}>
            <Icon
              as={CheckCircle}
              boxSize="2em"
              color="rgb(231,197,181)"
              mr={4}
            />
            <Text>
              A mentor to consult about career progression and success in life
            </Text>
          </Flex>
          <Flex alignItems="center">
            <Icon
              as={CheckCircle}
              boxSize="2em"
              color="rgb(231,197,181)"
              mr={4}
            />
            <Text>
              A friend to have a conversation beyond work-related issues
            </Text>
          </Flex>
        </Flex>

        <Flex direction="column" pt={24} alignItems="center">
          <Button
            borderRadius="full"
            size="lg"
            colorScheme="orange"
            backgroundColor="#D69F7E"
            onClick={() => navigate("/connect")}
          >
            It's simple with CoffeeChat
          </Button>

          <Flex direction="column" pt={16} alignItems="center">
            <Heading size="lg" py={8}>
              1. Make a profile
            </Heading>
            <MakeProfile />
          </Flex>

          <Flex direction="column" pt={16} alignItems="center">
            <Heading size="lg" py={8}>
              2. Connect with brilliant women in the industry
            </Heading>
            <Connected />
          </Flex>

          <Flex direction="column" pt={16} alignItems="center">
            <Heading size="lg" py={8}>
              3. Start a conversation!
            </Heading>
            <Chatting />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
