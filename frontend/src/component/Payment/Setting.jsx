import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import SimpleSidebar from "../SideBar/SideBar";
import Subscribe from "./Subscribe";

const Setting = () => {
  const [subscribe, setSubscribe] = useState(false);
  return (
      <Box w="100%">
        <Box border="1px solid" borderColor="gray.300" h="13vh">
          <Box
            fontWeight="600"
            fontSize="24px"
            color="gray.700"
            textAlign="left"
            pl="30px"
            pt="18px"
          >
            Settings
          </Box>
          <Box display="flex" justifyContent="space-evenly" w="70%" mt="24px">
            <Box>My Profile</Box>
            <Box>Integrations</Box>
            <Box>Team Settings</Box>
            <Box>Members</Box>
            <Box>Apps</Box>
            <Box>Notifications</Box>
            <Box borderBottom="3px solid" borderColor="green.300" pb="4px">
              Billing
            </Box>
            <Box>Security</Box>
          </Box>
        </Box>

        <Box minH="87vh">
          <Box
            fontWeight="600"
            fontSize="20px"
            color="gray.700"
            textAlign="left"
            pl="30px"
            pt="18px"
          >
            Subscription
          </Box>
          <Box
            p="20px"
            w="70%"
            m="auto"
            mt="20px"
          >
            <Box textAlign="left">Your free trial ends in 12 days.</Box>
            <Box display="flex" justifyItems="flex-start" mt="20px">
              {!subscribe ? (
                <Box display="flex" alignItems="center">
                  <Button w="160px" bgColor="#24be6a" color="white" onClick={()=>(setSubscribe(true))}>Subscribe</Button>
                  <Text fontSize="17px" color="gray.500"ml="20px" cursor="pointer"
                    _hover={{ color: "blue" }}>Billing History</Text></Box>) : (<Subscribe/>)}
            </Box>
            
          </Box>
          <hr style={{backgroundColor:"grey",height:"1px",marginTop:"30px"}}/>

          <Box
            fontWeight="600"
            fontSize="20px"
            color="gray.700"
            textAlign="left"
            pl="30px"
            pt="18px"
          >
           Extra Billing Information
          </Box>

          <Box
            p="20px"
            w="70%"
            m="auto"
            mt="20px"
            display="flex"
            flexDirection="column"
            justifyItems="flex-start"
          >
            <Box textAlign="left">You have not added any additional information to your receipts.</Box>
            <Button mt="20px" w="100px" fontSize="14px" border="1px solid grey">Add Details</Button> 
          </Box>
        </Box>
      </Box>
  );
};

export default Setting;
