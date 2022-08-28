import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Select,
  Switch,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router";
import "./signup.css";
const SignupPages = () => {
  const email = localStorage.getItem("sign_email");
  const [selectedStage, setSelectedStage] = useState(1);
  const [one, setOne] = useState({});
  const [two, setTwo] = useState({});
  const [three, setThree] = useState({});
  const [four, setFour] = useState({});
  const navigate=useNavigate()
  const submitData = () => {
   
    const payload = {
      email,
      ...one,
      ...two,
      ...three,
      ...four,
    };

    fetch("http://localhost:8000/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((d) => console.log(d));
localStorage.setItem("userName",payload.name)
      navigate("/dashboard")

  };
  return (
    <Box className="signupPage">
      <Box className="signup_box">
        {selectedStage === 1 ? (
          <StageOne
            selectedStage={selectedStage}
            setSelectedStage={setSelectedStage}
            one={one}
            setOne={setOne}
          />
        ) : selectedStage === 2 ? (
          <StageTwo
            selectedStage={selectedStage}
            setSelectedStage={setSelectedStage}
            two={two}
            setTwo={setTwo}
          />
        ) : selectedStage === 3 ? (
          <StageThree
            selectedStage={selectedStage}
            setSelectedStage={setSelectedStage}
            three={three}
            setThree={setThree}
          />
        ) : (
          <StageFour
            selectedStage={selectedStage}
            setSelectedStage={setSelectedStage}
            four={four}
            setFour={setFour}
            submutData={submitData}
          />
        )}
      </Box>
    </Box>
  );
};

export default SignupPages;

const StageOne = ({ selectedStage, setSelectedStage, one, setOne }) => {
  const handleChange = (e) => {
    if (e.target.name === "radio") {
      setOne({
        ...one,
        terms: e.target.value,
      });
    } else {
      setOne({
        ...one,
        [e.target.name]: e.target.value,
      });
    }
  };
  const handleStage1 = () => {
    setSelectedStage(selectedStage + 1);
  };
  return (
    <Box>
      <Box className="signup_content">
        <h1>Welcome to Everhour</h1>
        <h3>add your info to make collaborating easy</h3>
        <Box className="content_input">
          <FormControl marginTop={5}>
            <FormLabel>Full Name</FormLabel>
            <Input
              type="email"
              borderColor
              name="name"
              placeholder="enter your name"
              onChange={(e) => handleChange(e)}
            />
          </FormControl>
          <FormControl marginTop={7}>
            <FormLabel>Job Title</FormLabel>
            <Input
              type="text"
              placeholder="eg cofounder/ceo"
              borderColor="gray.400"
              onChange={(e) => handleChange(e)}
              name="job"
            />
          </FormControl>
          <FormControl marginTop={7}>
            <FormLabel>Phone</FormLabel>
            <Input
              type="text"
              name="phone"
              placeholder="8654754321"
              borderColor="gray.400"
              onChange={(e) => handleChange(e)}
            />
          </FormControl>
          <FormControl marginTop={7}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="pass"
              placeholder="Enter your password"
              borderColor="gray.400"
              onChange={(e) => handleChange(e)}
            />
          </FormControl>
          <Box fontSize="1rem">
            <RadioGroup defaultValue="2" marginTop={7}>
              <Radio
                name="radio"
                colorScheme="green"
                borderColor="gray"
                value="1"
                onChange={(e) => handleChange(e)}
              >
                I have read and agree to the Terms and privacy policy
              </Radio>
            </RadioGroup>
          </Box>
          <Box>
            <Button
              colorScheme="green"
              size="md"
              width={400}
              marginTop={3}
              onClick={handleStage1}
            >
              Continue
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const StageTwo = ({ selectedStage, setSelectedStage, two, setTwo }) => {
  const handleChange = (e) => {
    if (e.target.name === "radio") {
      setTwo({
        ...two,
        terms: e.target.value,
      });
    } else {
      setTwo({
        ...two,
        [e.target.name]: e.target.value,
      });
    }
  };
  const handleStage2 = () => {
    setSelectedStage(selectedStage + 1);
  };
  return (
    <Box>
      <Box className="signup_content">
        <h1>Welcome to Everhour</h1>
        <h3>add your info to make collaborating easy</h3>
        <Flex className="content_input" justifyContent="space-between">
          <FormControl marginTop={5} width="150px">
            <FormLabel>Name</FormLabel>
            <Input
              type="email"
              name="compony_name"
              borderColor="gray.500"
              placeholder="eg.Compony name"
              onChange={(e) => handleChange(e)}
            />
          </FormControl>
          <FormControl marginTop={5} width="150px">
            <FormLabel>Size</FormLabel>
            <Select
              placeholder="Select"
              borderColor="gray.500"
              name="size"
              onChange={(e) => handleChange(e)}
            >
              <option value="2-5">2-5</option>
              <option value="5-7">5-7</option>
              <option value="7-10">7-10</option>
              <option value="10-12">10-12</option>
              <option value="12-15">12-15</option>
              <option value="15-17">15-17</option>
            </Select>
          </FormControl>
        </Flex>
        <Flex>
          <FormControl marginTop={5} width="400px" margin="auto">
            <FormLabel>Emails Of People To Invite</FormLabel>
            <Textarea
              height="272px"
              name="contributer_email"
              type="textarea"
              borderColor="gray.500"
              placeholder="eg.shashi94ranjan@gmail.com"
              resize="none"
              marginBottom="1.5rem"
              onChange={(e) => handleChange(e)}
            />
          </FormControl>
        </Flex>

        <Box>
          <Button
            colorScheme="green"
            size="md"
            width={400}
            marginTop={3}
            onClick={handleStage2}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
const StageThree = ({ selectedStage, setSelectedStage, three, setThree }) => {
  const handleStage3 = () => {
    setSelectedStage(selectedStage + 1);
  };
  return (
    <Box>
      <Box className="signup_content">
        <h1>Activate extra features you need</h1>
        <h3>You can choose to display or hide certain features</h3>
        <Box className="content_input">
          <FormControl className="radiobtn">
            <FormLabel htmlFor="text1-alerts" mb="0">
              Check in and Check out
            </FormLabel>
            <Switch id="text1-alerts" size="sm" />
          </FormControl>
          <Flex lineHeight="1rem" fontSize=".8rem" color="gray.500">
            When an employ came and left and total hours worked
          </Flex>
          <hr />
          <FormControl className="radiobtn">
            <FormLabel htmlFor="text2-alerts" mb="0">
              Time off
            </FormLabel>
            <Switch id="text2-alerts" size="sm" />
          </FormControl>
          <Flex lineHeight="1rem" fontSize=".8rem" color="gray.500">
            Record employee vacations. annual leaves or absence
          </Flex>
          <hr />
          <FormControl className="radiobtn">
            <FormLabel htmlFor="text3-alerts" mb="0">
              Screenshots
            </FormLabel>
            <Switch id="text3-alerts" size="sm" />
          </FormControl>
          <Flex lineHeight="1rem" fontSize=".8rem" color="gray.500">
            Randomaly take screenshots of employee's computer
          </Flex>
          <hr />
          <FormControl className="radiobtn">
            <FormLabel htmlFor="text4-alerts" mb="0">
              Timesheet approval
            </FormLabel>
            <Switch id="text4-alerts" size="sm" />
          </FormControl>
          <Flex lineHeight="1rem" fontSize=".8rem" color="gray.500">
            Let employees submit their timesheets for approval
          </Flex>
          <hr />
          <FormControl className="radiobtn">
            <FormLabel htmlFor="text5-alerts" mb="0">
              Overtimes
            </FormLabel>
            <Switch id="text5-alerts" size="sm" />
          </FormControl>
          <Flex lineHeight="1rem" fontSize=".8rem" color="gray.500">
            Set up overtime and double time tracking
          </Flex>
          <hr />
          <FormControl className="radiobtn">
            <FormLabel htmlFor="text6-alerts" mb="0">
              Sceduling
            </FormLabel>
            <Switch id="text6-alerts" size="sm" />
          </FormControl>
          <Flex lineHeight="1rem" fontSize=".8rem" color="gray.500">
            Plan and watch progress on an interactive calender
          </Flex>
          <hr />
          <FormControl className="radiobtn">
            <FormLabel htmlFor="text7-alerts" mb="0">
              Expenses
            </FormLabel>
            <Switch id="text7-alerts" size="sm" />
          </FormControl>
          <Flex lineHeight="1rem" fontSize=".8rem" color="gray.500">
            Track work-related expenses that incurred on the job
          </Flex>
          <hr />
          <FormControl className="radiobtn">
            <FormLabel htmlFor="text8-alerts" mb="0">
              Invoices
            </FormLabel>
            <Switch id="text8-alerts" size="sm" />
          </FormControl>
          <Flex lineHeight="1rem" fontSize=".8rem" color="gray.500">
            Create inoices based on tracked time and expenses
          </Flex>
          <hr />
          <Box>
            <Button
              colorScheme="green"
              size="md"
              width={400}
              marginTop={3}
              onClick={handleStage3}
            >
              Continue
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const StageFour = ({
  selectedStage,
  setSelectedStage,
  four,
  setFour,
  submutData,
}) => {
  const handleChange = (e) => {
    if (e.target.name === "radio") {
      setFour({
        ...four,
        terms: e.target.value,
      });
    } else {
      setFour({
        ...four,
        [e.target.name]: e.target.value,
      });
    }
  };
  const handleStage4 = () => {
    submutData();
  };
  return (
    <Box>
      <Box className="signup_content">
        <h1>Create First Project</h1>
        <h3>
          In Everhour your track time spent on concrete task this keeps time
          organised and easy to analyze
        </h3>
        <Box className="content_input">
          <FormControl>
            <FormLabel>Project Name</FormLabel>
            <Input
              type="Text"
              borderColor="gray.500"
              placeholder="Project Name"
              name="projec_name"
              onChange={(e) => handleChange(e)}
            />
            <FormHelperText marginLeft="-2rem">
              This Project is billable
            </FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Client</FormLabel>
            <Input
              placeholder="Client Name(optional)"
              borderColor="gray.300"
              name="client"
              onChange={(e) => handleChange(e)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Tasks</FormLabel>
            <FormControl>
              <Input
                placeholder="Developement area"
                borderColor="gray.300"
                name="development_field"
                onChange={(e) => handleChange(e)}
              />
            </FormControl>
            <FormControl>
              <Input
                placeholder="Work category"
                borderColor="gray.300"
                name="typeOfproject"
                onChange={(e) => handleChange(e)}
              />
            </FormControl>
            <FormControl>
              <Input
                placeholder="Task Category"
                borderColor="gray.300"
                name="task_type"
                onChange={(e) => handleChange(e)}
              />
            </FormControl>
            <FormControl>
              <Input
                placeholder="Task name..."
                borderColor="gray.300"
                name="task_name"
                onChange={(e) => handleChange(e)}
              />
            </FormControl>
          </FormControl>
          <Box marginTop="2rem">
            <Button
              colorScheme="green"
              size="md"
              width={400}
              marginTop={3}
              onClick={handleStage4}
            >
              Continue
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
