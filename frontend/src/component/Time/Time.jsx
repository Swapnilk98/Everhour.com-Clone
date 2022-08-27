import { ChevronDownIcon, ChevronRightIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Divider,
  Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Search } from "./Search";
import FullCalendarApp from "./TimeSheet";

export const Time = () => {
  const [show, setShow] = useState(false)
  const handdleDown=()=>
  {
    setShow(false)
  }
  const handdleUp=()=>
  {
    setShow(true)
  }
  return (
    <Box >
      <Flex >

        
        <Box w="100%">
          <Search />
        {show?  <Box h="6" fontSize={"24px"} alignContent={"left"} mt="10" w="100%" onClick={handdleDown}>
          <ChevronDownIcon /> This Week .....
  </Box>:
  <Box h="6" fontSize={"24px"} alignContent={"left"} mt="10" w="100%" onClick={handdleUp}>
          <ChevronRightIcon /> This Week .....
  </Box>
}
               
               <Box mt="10">
               {
                  show?<FullCalendarApp />:""
                }
               </Box>
               <Divider />
        </Box>
      </Flex>
    </Box>
  );
};
