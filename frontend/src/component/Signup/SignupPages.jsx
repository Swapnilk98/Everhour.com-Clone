import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import './signup.css';
const SignupPages = () => {
  return (
    <Box className="signupPage">
      <Box className="signup_box">
        <Box className="signup_content">
          <h1>Welcome to Everhour</h1>
          <h3>add your info to make collaborating easy</h3>
          <Box className="content_input">
            <FormControl marginTop={5}>
              <FormLabel>Full Name</FormLabel>
              <Input type="email" borderColor placeholder="enter your name" />
            </FormControl>
            <FormControl marginTop={7}>
              <FormLabel>Job Title</FormLabel>
              <Input type="text" placeholder="eg cofounder/ceo" borderColor />
            </FormControl>
            <FormControl marginTop={7}>
              <FormLabel>Phone</FormLabel>
              <Input type="text" placeholder="8654754321" borderColor />
            </FormControl>
            <FormControl marginTop={7}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                borderColor
              />
            </FormControl>
            <Box>
              <RadioGroup defaultValue="2" marginTop={7}>
                <Radio colorScheme="green" borderColor="gray">
                  I have read and agree to the Terms and privacy policy
                </Radio>
              </RadioGroup>
            </Box>
            <Box>
              <Button colorScheme="green" size="md" width={400} marginTop={3}>
                Continue
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignupPages;
