import { Box, Flex, Heading } from "@chakra-ui/react";
import { RouteComponentProps } from "@reach/router";
import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import withAuth from "../../hocs/withAuth";
import Carousel from "./carousel";
import Filter from "./filter";
import List from "./list";

export default withAuth(function Connect(props: RouteComponentProps) {
  const [profiles, setProfiles] = useState<any>([]);
  const [industryFilter, setIndustryFilter] = useState();
  const [availabilityFilter, setAvailabilityFilter] = useState();
  const [roleFilter, setRoleFilter] = useState();
  const [chat, setChat] = useState();
  const [video, setVideo] = useState();
  const [locationFilter, setLocationFilter] = useState();

  useEffect(() => {
    console.log(industryFilter);
  }, [industryFilter]);

  useEffect(() => {
    setProfiles([
      {
        uid: "FzY2QhlaoxkCsghSpFuA",
        name: "Utkarsh",
        image:
          "https://avatars.githubusercontent.com/u/19630580?s=460&u=983d41ffb2fabf9d6891998384802d33c4509e3d&v=4",
        position: "CTO & Co-founder",
      },
      {
        name: "Angela",
        image:
          "https://avatars.githubusercontent.com/u/19630580?s=460&u=983d41ffb2fabf9d6891998384802d33c4509e3d&v=4",
        position: "CTO & Co-founder",
      },
      {
        name: "Sarthak",
        image:
          "https://avatars.githubusercontent.com/u/19630580?s=460&u=983d41ffb2fabf9d6891998384802d33c4509e3d&v=4",
        position: "CTO & Co-founder",
      },
    ]);
  }, []);

  return (
    <Box pos="fixed" h="100vh" w="100%">
      <Header />
      <Flex bg="#5C3C1E" px={24} py={6}>
        <Heading size="md" color="#ECE2D0">
          Find someone to grab a coffee
        </Heading>
      </Flex>
      <Flex w="100%" m="auto" pl={24} h="75%" overflowY="auto">
        <Filter
          setIndustryFilter={setIndustryFilter}
          setAvailabilityFilter={setAvailabilityFilter}
          setRoleFilter={setRoleFilter}
          setChat={setChat}
          setVideo={setVideo}
          setLocationFilter={setLocationFilter}
        />
        <List profiles={profiles} />
      </Flex>
    </Box>
  );
});
