import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  ListItem,
  Radio,
  RadioGroup,
  Stack,
  UnorderedList,
} from "@chakra-ui/react";
import "../Signup/signup.css";
import { FcGoogle } from "react-icons/fc";
import WithSubnavigation from "../Navbar/Navbar";
import LargeWithAppLinksAndSocial from "../Footer/Footer";
const Demo = () => {
  return (
    <>
    <WithSubnavigation />
    
    <Box className="main_login">
      <Box className="page1_top">
        <Box className="background">
          <Box className="demo_background_left" marginTop="10rem"></Box>
          <Box
            className="background_left_top"
            marginTop="12rem"
            marginLeft="5rem"
          ></Box>
          <Box className="demo_background_right" marginTop="2rem"></Box>
        </Box>
        <Box
          fontSize="3rem"
          marginTop="-6rem"
          fontFamily="geomanist-regular sans-serif"
          fontWeight="bold"
        >
          Book a 30-min live demo
          <img
            display="inline-block"
            width="40px"
            src="images/download.png"
            alt=""
          />
        </Box>
        <Box
          fontSize="1.5rem"
          fontWeight="500"
          color="gray"
          width="60%"
          margin="auto"
        >
          10+ users? Let one of our customer success experts show you how
          Everhour works, with plenty of time set aside for questions
        </Box>
        <Box marginTop="2.5rem">
          <Button
            backgroundColor="#57bb71"
            size="lg"
            width="15rem"
            marginTop="-.4rem"
            marginRight="20px"
          >
            Scedule time
          </Button>
          <Button
            colorScheme="white"
            color="gray"
            size="lg"
            width="10rem"
            marginTop="-.4rem"
            border="2px solid #57bb71 "
          >
            Watch Videos
          </Button>
        </Box>
      </Box>
      <Box className="demo_box" marginBottom="5rem">
        <Box className="demo_content_header">What you’ll learn</Box>
        <Box className="demo_list">
          <UnorderedList fontWeight="500" color="gray" margin="1rem">
            <ListItem margin="1rem">
              We’ll briefly explain what’s so special about Everhour.
            </ListItem>
            <ListItem margin="1rem">
              We’ll teach you the basics of using the app, with plenty of time
              for questions.
            </ListItem>
            <ListItem margin="1rem">
              We’ll answer all questions about setting up Everhour, using it
              with your team, or anything else you’d like to ask.
            </ListItem>
          </UnorderedList>
        </Box>
        <Box className="demo_content_header">Other information</Box>
        <Box>
          <UnorderedList fontWeight="500" color="gray">
            <ListItem margin="1rem">
              Screenshare is done in the browser by means of Whereby software
              using this link. Please ensure that your mic and speakers work in
              advance!
            </ListItem>
            <ListItem margin="1rem">
              Demos typically last 30 minutes, but we will adjust the time based
              on your needs.
            </ListItem>
            <ListItem margin="1rem">
              Feel free to invite other team members to join this call.
            </ListItem>
            <ListItem margin="1rem">
              No available time slots? Contact us and we'll surely work
              something out.
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>
      <Box textAlign="center" marginBottom="3rem">
        <Box
          fontSize="2.2rem"
          fontFamily="geomanist-regular sans-serif"
          fontWeight="bold"
        >
          Skip the demo and try for yourself?
        </Box>
        <Box fontSize="1.2rem" color="gray" width="40%" margin="auto">
          Try Everhour for free to see if it works for your business. No credit
          card required. No obligations.
        </Box>
        <Box margin={5}>
          <Input
            placeholder="Work Email..."
            size="md"
            width={300}
            borderColor="gray.600"
            p={5}
            padding={6}
            paddingBottom="-1rem"
            marginRight={5}
          />
          <Button
            colorScheme="green"
            size="lg"
            width="10rem"
            marginTop="-.4rem"
          >
            Try it free
          </Button>
        </Box>
        <Box>
          <Button
            className="email_btn"
            colorScheme="white"
            border="none"
            width="329px"
            leftIcon={<FcGoogle fontSize="1.5rem" />}
          >
            <Box className="login_endbtn" color="gray">
              {" "}
              Or Sign up with google account
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
    <LargeWithAppLinksAndSocial />
    </>
  );
};

export default Demo;
