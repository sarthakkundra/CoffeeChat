import { Flex, Heading } from "@chakra-ui/react";
import { RouteComponentProps } from "@reach/router";
import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import withAuth from "../../hocs/withAuth";
import Carousel from "./carousel";
import Filter from "./filter";

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
      {
        name: "Angela",
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
    ]);
  }, []);

  return (
    <>
      <Header />
      <Flex alignItems="center" w="100%" maxW={"5xl"} m="auto">
        <Filter
          setIndustryFilter={setIndustryFilter}
          setAvailabilityFilter={setAvailabilityFilter}
          setRoleFilter={setRoleFilter}
          setChat={setChat}
          setVideo={setVideo}
          setLocationFilter={setLocationFilter}
        />
        <Carousel profiles={profiles} />
      </Flex>
    </>
  );
});
