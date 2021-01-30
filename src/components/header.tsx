import { Flex, Heading, IconButton, Link } from "@chakra-ui/react";
import { Bell, User } from "@emotion-icons/boxicons-solid";
import React, { useContext, Fragment } from "react";
import { useNavigate } from "@reach/router";

export default function Header() {
  const handleAuth = () => {};
  const navigate = useNavigate();
  return (
    <Flex
      maxW="5xl"
      justifyContent="space-between"
      m="auto"
      alignItems="center"
      py={8}
    >
      <Flex>
        <Heading>CoffeeChat</Heading>
      </Flex>
      <Flex alignItems="center">
        <Link href="/" mx={2}>
          home
        </Link>
        <Link mx={2} href="/connect">
          connect
        </Link>
        <Link mx={2}>about</Link>
        <IconButton
          aria-label="Notifications"
          icon={<Bell />}
          mx={2}
          variant="ghost"
          size="md"
          p={2}
          isRound
        />
        <IconButton
          aria-label="Profile"
          icon={<User />}
          mx={2}
          variant="ghost"
          size="md"
          p={2}
          onClick={() => navigate("/profile")}
          isRound
        />
      </Flex>
    </Flex>
  );
}
