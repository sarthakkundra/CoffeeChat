import React, { Fragment } from 'react';
import { Flex, Box, Spacer, Link, Button } from "@chakra-ui/react";

 
const Footer = () => {
    return (
        <Fragment>
              <Flex  style={footerStyle}>
    <Box style={boxStyle}>
        
        <ul style={listStyle}>
        <h3>Made By </h3>
            <li>
                Aanisha Bhattacharyya
            </li>
            <li>
            Seyoung (Angela) Park
            </li>
            <li>
                Harsh Mishra
            </li>
            <li>
                Sarthak Kundra
            </li>
        </ul>
        </Box>
    <Spacer />
    <Box style={boxStyle} >
    <Button style={buttonStyle} borderColor="whiteAlpha.500" variant="outline">
    <Link style={buttonText} href="https://www.globalgiving.org/search/?size=25&nextPage=1&sortField=sortorder&selectedCountries=00unista&selectedThemes=env&selectedRecognitions=projectoftheMonth&loadAllResults=true">Help the Cause</Link>
    <img style={iconStyle} src="https://img.icons8.com/dotty/80/000000/charity.png"/>
  </Button>
  </Box>
    <Spacer />
    <Box style={boxStyle}>
        <Button style={buttonStyle} borderColor="whiteAlpha.500" variant="outline">
            <Link style={buttonText} href="https://github.com/sarthakkundra/CoffeeChat">Report a Bug</Link>
        </Button>
        </Box>
  </Flex>
        </Fragment>
    )
}

var footerStyle = {
    backgroundColor: "#582d4d",
    marginTop: "20px",
    height: "10rem"
}

var boxStyle = {
    height: "2rem",
    marginTop: "20px",
    marginLeft: "50px"
}

var buttonText = {
    color: "white",
    textDecoration: "none"
}

var iconStyle = {
    marginLeft: "10px",
    height: "80%"
}

var listStyle = {
    listStyle: "none",
    color: "white"
}

var buttonStyle = {
    marginTop: "2rem",
    marginRight: "45px"
}
export default Footer
