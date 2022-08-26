import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import SimpleSidebar from "../SideBar/SideBar";
import { Search } from "./Search";
import FullCalendarApp from "./TimeSheet";

export const Time = () => {
  return (
    <Box>
      <Flex gap="20px">
        <Box>
          <Search />

          <Accordion defaultIndex={[0]} allowMultiple mt="10">
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <AccordionIcon />
                  <Box flex="1" textAlign="left">
                    This Week .....
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} h="100%">
                <FullCalendarApp />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Flex>
    </Box>
  );
};
