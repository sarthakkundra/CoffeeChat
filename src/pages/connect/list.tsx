import {
  Flex,
  Text,
  Image,
  Button,
  Box,
  Divider,
  IconButton,
} from "@chakra-ui/react";
import { Heart, RightArrowAlt } from "@emotion-icons/boxicons-regular";
import { useNavigate } from "@reach/router";
import React from "react";
import { useChat } from "../../context/ChatProvider";

export interface ListProps {
  profiles: any[];
}

export default function List({ profiles }: ListProps) {
  const { createRoom } = useChat();
  const navigate = useNavigate();
  return (
    <Flex
      direction="column"
      w="100%"
      flex={3}
      bg="#F5EDEC"
      overflowY="auto"
      borderColor="brown"
    >
      {profiles.map((profile) => {
        return (
          <>
            <Flex
              px={4}
              py={4}
              justifyContent="space-between"
              alignItems="center"
              flex="0 0 auto"
              w="100%"
            >
              <Flex alignItems="center">
                <Image
                  src={profile.image}
                  boxSize="100px"
                  borderRadius={10}
                  m={4}
                />
                <Box color="#582C4D">
                  <Text pt={4} fontWeight="bold">
                    {profile.name}
                  </Text>
                  <Text pt={1} fontSize="xs">
                    {profile.position}
                  </Text>
                </Box>
              </Flex>

              <Flex mr={4}>
                <IconButton
                  aria-label="like"
                  icon={<Heart />}
                  variant="ghost"
                />
                <Flex
                  direction="column"
                  alignItems="center"
                  px={10}
                  pos="relative"
                >
                  <Box position="absolute" top="-6">
                    <Text fontWeight="bold" fontSize="xs">
                      Ask for coffee
                    </Text>
                  </Box>
                  <Box>
                    <IconButton
                      aria-label="like"
                      icon={<RightArrowAlt />}
                      variant="ghost"
                      onClick={async () => {
                        const roomID = await createRoom(profile.uid);
                        navigate(`/chat/${roomID}`);
                      }}
                    />
                  </Box>
                </Flex>
              </Flex>
            </Flex>
            <Divider w="90%" alignSelf="center" />
          </>
        );
      })}
    </Flex>
  );
}
