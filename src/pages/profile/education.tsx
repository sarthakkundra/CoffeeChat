import React, { useEffect } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import InputWithTabs from "../../components/inputWithTabs";
import { User } from ".";

export interface EducationProps {
  user: User | undefined;
  setUser: (user: Partial<User>) => void;
}

export default function Education({ user, setUser }: EducationProps) {
  const { handleSubmit, errors, register, setValue } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    setUser({
      education: { ...data },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name} mr={2} pb={4}>
        <FormLabel htmlFor="schoolName">School</FormLabel>
        <Input
          name="schoolName"
          placeholder="Name"
          ref={register()}
          defaultValue={user?.education?.schoolName}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.name} pb={4}>
        <FormLabel htmlFor="degree">Degree/Certificate</FormLabel>
        <Input
          name="degree"
          placeholder="Enter qualification"
          ref={register()}
          defaultValue={user?.education?.degree}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.name} pb={4}>
        <FormLabel htmlFor="fieldOfStudy">Field of study</FormLabel>
        <Input
          name="fieldOfStudy"
          placeholder="Field of study"
          ref={register()}
          defaultValue={user?.education?.fieldOfStudy}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.name} pb={4}>
        <FormLabel htmlFor="schoolLocation">Location</FormLabel>
        <Input
          name="schoolLocation"
          placeholder="City, State or Country"
          ref={register()}
          defaultValue={user?.education?.schoolLocation}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
      <Button colorScheme="green" type="submit" my={10}>
        Update
      </Button>
    </form>
  );
}
