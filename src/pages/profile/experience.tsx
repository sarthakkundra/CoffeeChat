import React, { useEffect, useState } from "react";
import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  HStack,
  Input,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { User } from ".";
import InputWithTabs from "../../components/inputWithTabs";

export interface EducationProps {
  user: User | undefined;
}

export default function Experience({ user }: EducationProps) {
  const { handleSubmit, errors, register, setValue, getValues } = useForm();
  const [experienceLevel, setExperienceLevel] = useState(
    user?.experience?.experienceLevel || "New"
  );

  useEffect(() => {
    register("experienceLevel");
  }, [register]);

  useEffect(() => {
    setValue("experienceLevel", experienceLevel);
  }, [experienceLevel]);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name} mr={2}>
        <RadioGroup
          defaultValue={experienceLevel}
          name="experienceLevel"
          onChange={(value) =>
            setExperienceLevel((value.toString() as "New") || "Experienced")
          }
        >
          <HStack spacing="24px">
            <Radio value="New">New to industry</Radio>
            <Radio value="Experienced">Experienced</Radio>
          </HStack>
        </RadioGroup>
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
      {experienceLevel === "New" ? (
        <>
          <FormControl isInvalid={errors.name} py={4}>
            <FormLabel htmlFor="industry">Industry</FormLabel>
            <Input
              name="industry"
              placeholder="Industry"
              ref={register()}
              defaultValue={user?.experience?.industry}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.name}>
            <FormLabel htmlFor="positionsOfInterest">
              Position of interest
            </FormLabel>
            <InputWithTabs
              name="positionsOfInterest"
              placeholder="Position"
              defaultValue={user?.experience?.positionsOfInterest || []}
              setValue={setValue}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
        </>
      ) : (
        <>
          <FormControl isInvalid={errors.name} py={4}>
            <FormLabel htmlFor="degree">Current Job Title</FormLabel>
            <Input
              name="jobTitle"
              placeholder="Title"
              ref={register()}
              defaultValue={user?.experience?.jobTitle}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.name} pb={4}>
            <FormLabel htmlFor="company">Company</FormLabel>
            <Input
              name="company"
              placeholder="Company"
              ref={register()}
              defaultValue={user?.experience?.company}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.name} pb={4}>
            <FormLabel htmlFor="industry">Industry</FormLabel>
            <Input
              name="industry"
              placeholder="Industry"
              ref={register()}
              defaultValue={user?.experience?.industry}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.name} pb={4}>
            <FormLabel htmlFor="location">Location</FormLabel>
            <Input
              name="location"
              placeholder="City, State or Country"
              ref={register()}
              defaultValue={user?.experience?.location}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
        </>
      )}
    </form>
  );
}
