import { Flex, Text, Image, Button } from "@chakra-ui/react";
import React from "react";

export interface CarouselProps {
  profiles: any[];
}

export default function Carousel({ profiles }: CarouselProps) {
  return (
    <Flex
      grow={1}
      px={10}
      w="xl"
      overflowX="scroll"
      alignItems="center"
      my={12}
    >
      {profiles.map((profile) => {
        return (
          <Flex
            py={10}
            px={4}
            direction="column"
            alignItems="center"
            flex="0 0 auto"
            maxW={"2xs"}
            borderRadius={10}
          >
            <Image src={profile.image} borderTopRadius={24} />
            <Text pt={4} fontWeight="bold">
              {profile.name}
            </Text>
            <Text pt={1} fontSize="xs">
              {profile.position}
            </Text>
            <Button variant="ghost" w="100%" py={6} my={2}>
              Ask for a coffee
            </Button>
          </Flex>
        );
      })}
    </Flex>
  );
}
