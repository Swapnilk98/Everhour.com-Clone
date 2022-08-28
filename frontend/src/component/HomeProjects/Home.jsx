

import { Box, Flex,Text } from "@chakra-ui/react";

import React from "react";
import SimpleSidebar from "../SideBar/SideBar";
import { MemberSpentTime } from "./MemberSpentTime";
import { ProjectWithSpentTime } from "./ProjectWithSpentTime";
import { TeamTimeSheet } from "./TeamTimeSheet";


export const Home = () => {
  return (
    <Box>


    <Box w="100%" p="10">
   <Text  fontSize={"20px "}  textAlign={"center"} mb="4">Team timesheet</Text>
      <TeamTimeSheet />

    </Box>
  
    <Box w="100%" p="10">
    <Text fontSize={"20px "}  textAlign={"center"} mb="4">Projects with the most spent time</Text>
    <ProjectWithSpentTime />
    </Box>

    <Box w="100%" p="10">
    <Text fontSize={"20px "}  textAlign={"center"} mb="4">Members with the most spent time</Text>
    <MemberSpentTime />
    </Box>
    </Box>
  );
};
