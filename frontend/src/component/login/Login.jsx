import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import "../Signup/signup.css";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useNavigate } from "react-router";
import WithSubnavigation from "../Navbar/Navbar";
import LargeWithAppLinksAndSocial from "../Footer/Footer";
const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
const navigate=useNavigate()
  const login = () => {
    

let token=localStorage.getItem("login_message")
if(token)
{
navigate("/dashboard")
}
else
{
  const payload = {
    email,
    pass,
  };
  fetch("http://localhost:8000/login", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((d) => localStorage.setItem("login_message", d.token));
};
}




    
  return (
    <>
    <WithSubnavigation />
    
    <Box className="main_login">
      <Box className="page1_top">
        <Box className="background">
          <Box className="background_left" marginTop="4rem"></Box>
          <Box className="background_left_top" marginTop="2rem"></Box>
          <Box className="background_right" marginTop="2rem"></Box>
        </Box>
        <Box
          fontSize="3rem"
          marginTop="-6rem"
          fontFamily="geomanist-regular sans-serif"
          fontWeight="bold"
        >
          Log in to Everhour
        </Box>
        <Box fontSize="1.5rem" color="gray.600">
          Using the former version of Everhour? Please{" "}
          <Box className="right_links">login here</Box>
        </Box>
      </Box>
      <Box className="login_box">
        <Box className="login_content">
          <Box marginTop="5rem">
            <Button
              className="email_btn"
              p="20px"
              colorScheme="white"
              leftIcon={<FcGoogle fontSize="2rem" />}
            >
              <span style={{ margin: "0px auto 0px auto", color: "gray" }}>
                {" "}
                Sign up with google
              </span>
            </Button>
            <Box m={5} color="gray">
              or
            </Box>
            <Box>
              <Input
                placeholder=" email ..."
                size="md"
                width={300}
                borderColor="gray.600"
                p={5}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
            <Box margin={5}>
              <Input
                placeholder=" password ..."
                size="md"
                width={300}
                borderColor="gray.600"
                p={5}
                onChange={(e) => setPass(e.target.value)}
              />
            </Box>
            <Box style={{ marginTop: "1.5rem" }}>
              <Button
                colorScheme="green"
                size="lg"
                width="10rem"
                onClick={login}
              >
                Log in
              </Button>
            </Box>
            <Box className="login_endbtn">Login with SSO</Box>
            <Box className="login_endbtn">Reset Password</Box>
          </Box>
          <Box className="login_right">
            <Box color="red">NEWS</Box>
            <Box className="login_right-content">
              <Box className="right_header">Integration with Todoist</Box>
              <Box>
                Everhour now integrates with Todoist!{" "}
                <Box className="right_links">Learn more</Box>
              </Box>
            </Box>
            <Box className="login_right-content">
              <Box className="right_header">Integration with Notion</Box>
              <Box>
                Everhour now integrates with Notion!
                <Box className="right_links">Learn more</Box>
              </Box>
            </Box>
            <Box className="login_right-content">
              <Box className="right_header">Single Sign-On</Box>
              <Box>
                Use single sign-on (SSO) to access Everhour for your projects
                and timesheets.
                <Box className="right_links">Learn more</Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box marginBottom="5rem" textAlign="center">
        <Box
          fontSize="3rem"
          fontFamily="geomanist-regular sans-serif"
          fontWeight="bold"
        >
          New to Everhour?
        </Box>
        <Box fontSize="1.2rem" color="gray">
          Try Everhour for free and see if it works for your business
        </Box>
        <Box>
          <Box margin={5} textAlign="center">
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
      <Box className="login_pic">
        <img
          className="login_women"
          src="https://blog-cdn.everhour.com/assets/images/new-design/illustrations/primary-illustrations/footer.jpg"
        ></img>
      </Box>
    </Box>
    <LargeWithAppLinksAndSocial />
    </>
  );
};

export default Login;
