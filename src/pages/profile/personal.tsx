import React, { useEffect } from "react";
import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import InputWithTabs from "../../components/inputWithTabs";
import { User } from ".";

export interface PersonalProps {
  user: User | undefined;
}

export default function Personal({ user }: PersonalProps) {
  const { handleSubmit, errors, register, setValue } = useForm();

  useEffect(() => {
    register({ name: "languages" });
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex pb={4}>
        <FormControl isInvalid={errors.name} mr={2}>
          <FormLabel htmlFor="firstName">First name</FormLabel>
          <Input
            name="firstName"
            placeholder="First name"
            ref={register()}
            defaultValue={user?.firstName}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.name}>
          <FormLabel htmlFor="lastName">Last name</FormLabel>
          <Input
            name="lastName"
            placeholder="Last Name"
            ref={register()}
            defaultValue={user?.lastName}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
      </Flex>
      <FormControl isInvalid={errors.name} pb={4}>
        <FormLabel htmlFor="location">Location</FormLabel>
        <Input
          name="location"
          placeholder="Location"
          ref={register()}
          defaultValue={user?.location}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.name} pb={4}>
        <FormLabel htmlFor="location">Timezone</FormLabel>
        <Input
          name="location"
          placeholder="Location"
          ref={register()}
          defaultValue={user?.timezone}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.name}>
        <FormLabel htmlFor="languages">Languages</FormLabel>
        <InputWithTabs
          name="languages"
          placeholder="Language"
          defaultValue={user?.languages || []}
          setValue={setValue}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
    </form>
  );
}
