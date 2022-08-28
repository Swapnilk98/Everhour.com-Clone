import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClients } from "../../Redux/TimeClient/action";
import SimpleSidebar from "../SideBar/SideBar";
import { ClientList } from "./ClientList";
import { CreateClient } from "./CreateClient";
import { FilteringClinen } from "./FilteringClinen";

export const ClintsMainPage = () => {
  const { clientData } = useSelector((state) => state.TimeClientReducer);
  console.log(clientData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClients());
  }, []);

  return (
    <Box>
      <Flex>
        <Box w="100%" mt="5">
          <Flex justifyContent={"space-between"} p="4">
            <Text fontSize={"29px"}>Clients</Text>
            <CreateClient />
          </Flex>
          <FilteringClinen />
          {clientData.map((ele) => {
            return <ClientList key={ele._id} {...ele} />;
          })}
        </Box>
      </Flex>
    </Box>
  );
};
