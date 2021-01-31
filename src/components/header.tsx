import { Button, Flex, Heading, IconButton, Link } from "@chakra-ui/react";
import { Bell, User } from "@emotion-icons/boxicons-solid";
import React, { useContext, Fragment } from "react";
import { useNavigate } from "@reach/router";
import { ReactComponent as Logo } from "../images/coffeechat-05.svg";
import {
  useAuth,
  useLoginWithGoogle,
} from "../context/authentication/AuthContext";

export default function Header() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { login, logout } = useLoginWithGoogle();

  return (
    <Flex
      maxWidth="5xl"
      justifyContent="space-between"
      m="auto"
      alignItems="center"
      py={4}
    >
      <Flex w="3xs" h="auto">
        <Logo style={{ width: "100%", height: "auto" }} />
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
          aria-label="Profile"
          icon={<User size="24" />}
          mx={2}
          variant="ghost"
          size="md"
          p={2}
          onClick={() => navigate("/profile")}
          isRound
        />
        {isAuthenticated ? (
          <Button mx={2} onClick={() => logout()}>
            Sign Out
          </Button>
        ) : (
          <Button mx={2} onClick={() => login()}>
            Sign In
          </Button>
        )}
      </Flex>
    </Flex>
  );
}
