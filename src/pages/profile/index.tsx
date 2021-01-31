import {
  Flex,
  Grid,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { RouteComponentProps } from "@reach/router";
import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import withAuth from "../../hocs/withAuth";
import Education from "./education";
import Experience from "./experience";
import Personal from "./personal";

export interface EducationData {
  schoolName: string;
  degree: string;
  fieldOfStudy: string;
  schoolLocation: string;
}

export interface ExperienceData {
  experienceLevel: "New" | "Experienced";
  jobTitle?: string;
  company?: string;
  industry: string;
  location?: string;
  positionsOfInterest: string[];
}

export interface User {
  firstName: string;
  lastName: string;
  location: string;
  timezone: string;
  languages: string[];
  image: string;
  education?: EducationData;
  experience?: ExperienceData;
}

export default withAuth(function Profile(props: RouteComponentProps) {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const user = {
      firstName: "Utkarsh",
      lastName: "Goel",
      location: "Hong Kong",
      timezone: "HKT",
      languages: ["Hindi", "English"],
      image:
        "https://avatars.githubusercontent.com/u/19630580?s=460&u=983d41ffb2fabf9d6891998384802d33c4509e3d&v=4",
    };
    setUser(user);
  }, []);

  return (
    <>
      <Header />
      <Grid
        templateColumns={["1fr 3fr"]}
        maxW="5xl"
        m="auto"
        gridGap={4}
        py={10}
      >
        <Flex px={10} alignItems="start" justifyContent="center">
          <Flex w="100%">
            <Image src={user?.image} borderRadius="full" fit="contain" />
          </Flex>
        </Flex>
        <Flex w="100%">
          <Tabs w="100%">
            <TabList>
              <Tab>Personal</Tab>
              <Tab>Education</Tab>
              <Tab>Experience</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Personal user={user} />
              </TabPanel>
              <TabPanel>
                <Education user={user} />
              </TabPanel>
              <TabPanel>
                <Experience user={user} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Grid>
    </>
  );
});
