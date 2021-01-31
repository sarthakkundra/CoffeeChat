import { Box, Flex, Heading } from "@chakra-ui/react";
import { RouteComponentProps } from "@reach/router";
import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import withAuth from "../../hocs/withAuth";
import Carousel from "./carousel";
import Filter from "./filter";
import List from "./list";
import firebase from "firebase";
import "firebase/firestore";

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
    const db = firebase.firestore();
    db.collection("users")
      .get()
      .then((collectionSnapshot) => {
        const data = collectionSnapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        console.log(data);
        setProfiles(data);
      });
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
