import {
  Box,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

export interface FilterProps {
  setIndustryFilter: any;
  setAvailabilityFilter: any;
  setRoleFilter: any;
  setChat: any;
  setVideo: any;
  setLocationFilter: any;
}

export default function Filter(props: FilterProps) {
  return (
    <Flex direction="column" pr={4}>
      <Heading py={4} size="md">
        I'm looking for...
      </Heading>
      <Box py={4}>
        <Text py={2}>Industry</Text>
        <Input
          placeholder="Industry"
          onChange={(e) => props.setIndustryFilter(e.target.value)}
        />
      </Box>
      <Box py={4}>
        <Text py={2}>When do you want to chat?</Text>
        <RadioGroup
          defaultValue="later"
          name="available"
          onChange={(value) => {
            props.setAvailabilityFilter(value);
          }}
        >
          <HStack spacing="24px">
            <Radio value="later">Just browsing</Radio>
            <Radio value="now">I'm free to chat right now</Radio>
          </HStack>
        </RadioGroup>
      </Box>
      <Box py={4}>
        <Text py={2}>Role</Text>
        <RadioGroup
          defaultValue="aspire"
          name="role"
          onChange={(value) => {
            props.setRoleFilter(value);
          }}
        >
          <HStack spacing="24px">
            <Radio value="aspire">Aspiring (mentee)</Radio>
            <Radio value="inspire">Inspire (mentor)</Radio>
          </HStack>
        </RadioGroup>
      </Box>
      <Box py={4}>
        <Text py={2}>Preferred contact method</Text>
        <Flex>
          <Checkbox
            colorScheme="pink"
            mr={4}
            defaultIsChecked
            onChange={(e) => props.setChat(e.target.value)}
          >
            Chat
          </Checkbox>
          <Checkbox
            colorScheme="pink"
            onChange={(e) => props.setVideo(e.target.value)}
          >
            Video
          </Checkbox>
        </Flex>
      </Box>
      <Box py={4}>
        <Text py={2}>Discover CoffeeMates beyond boundaries</Text>
        <Input
          name="location"
          placeholder="Location"
          onChange={(e) => props.setLocationFilter(e.target.value)}
        />
      </Box>
    </Flex>
  );
}
