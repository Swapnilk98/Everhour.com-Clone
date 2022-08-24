import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Switch,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { AddIcon, Search2Icon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";

export const Search = () => {
  const [formData,setFormData]=useState({

  })

  const { isOpen, onOpen, onClose } = useDisclosure()

const haddleAddTask=()=>
{
 
  onClose()
}
const handleChange = (e) => {
  const inputName = e.target.name;
 console.log(inputName);
    setFormData({
      ...formData,
      [inputName]: e.target.value,
    });
  
};
let endTimeRequired=formData.timeHour
let endDateRequired=formData.currentDate
function addHours(numOfHours, date = new Date()) {
  const dateCopy = new Date(date.getTime());

  dateCopy.setTime(dateCopy.getTime() + numOfHours * 60 * 60 * 1000);

  return dateCopy;
}
const date = new Date(endDateRequired ||'2022-03-14T09:25:30.820');
// 👇️ Add 2 hours to another date


const result = addHours(endTimeRequired, date);

function convertDatePickerTimeToMySQLTime(str) {
  var month, day, year, hours, minutes, seconds;
  var date = new Date(str),
      month = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
  hours = ("0" + date.getHours()).slice(-2);
  minutes = ("0" + date.getMinutes()).slice(-2);
  seconds = ("0" + date.getSeconds()).slice(-2);

  var mySQLDate = [date.getFullYear(), month, day].join("-");
  var mySQLTime = [hours, minutes].join(":");
  return [mySQLDate,"T", mySQLTime].join("");
}



let endTime=convertDatePickerTimeToMySQLTime(result)
useEffect(() => {
  setFormData({
    ...formData,
    end:endTime,
  });
}, [endTime])
// console.log(convertDatePickerTimeToMySQLTime(result)); // 👉️ Mon Mar 14 2022 11:25:30

const handdleReport=()=>
{
   console.log(formData);

 }

  return (
    <Box w={"1050px"} h="60px" mt={2} border="1px solid gray">
      <Flex h="60px">
        <Box>
          <Stack spacing={4} width="">
            <InputGroup>
              <InputLeftElement
                mt="2"
                pointerEvents="none"
                children={<Search2Icon color="gray.300" />}
              />
              <Input
                mt="3"
                variant="unstyled"
                textAlign={"center"}
                size="lg"
                color="gray.300"
                width={"580px"}
                placeholder="Enter amount"
              />
             <Button  mt="2"  onClick={onOpen} variant='ghost'><AddIcon color={"gray.300"} /></Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Task Name</FormLabel>
              <Input type={"text"} name="title"
          onChange={handleChange} placeholder='Task Name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input type={"text"}   name="project"
          onChange={handleChange} placeholder='project name' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={haddleAddTask}>
              Save
            </Button>
           
          </ModalFooter>
        </ModalContent>
      </Modal>
            </InputGroup>
          </Stack>
        </Box>

        <Box
          borderLeft={"1px solid gray"}
          borderRight={"1px solid gray"}
          width="150px"
        >
          <FormControl
            display="flex"
            fontSize={"11px"}
            alignItems="center"
            color={"gray.300"}
          >
            <FormLabel fontSize={"14px"} htmlFor="email-alerts" mb="0">
              Time Period
            </FormLabel>
            <Switch id="email-alerts" />
          </FormControl>
          <Input
           type={"number"}   name="timeHour"
           onChange={handleChange}
            variant="unstyled"
            textAlign={"center"}
            color={"gray.400"}
            placeholder="Ex.2h"
          />
        </Box>

        <Box borderRight={"1px solid gray"} width="150px">
          <Text fontSize={"14px"} mb="0" color="gray.300">
            Date
          </Text>

          <Input
            type="datetime-local"
            name="start"
            onChange={handleChange}
            variant="unstyled"
            textAlign={"center"}
            color={"gray.400"}
            
          />
        </Box>
        <Box>
          <Button
          onClick={handdleReport}
            borderRadius={"none"}
            h="100%"
            w={"100%"}
            colorScheme="whatsapp"
          >
           Report Time
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};
