import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import SimpleSidebar from '../SideBar/SideBar'
import { ClientList } from './ClientList'
import { CreateClient } from './CreateClient'
import { FilteringClinen } from './FilteringClinen'


export const ClintsMainPage = () => {
  return (
    <Box >
    <Flex gap="0px" >
        <Box>
            <SimpleSidebar />
        </Box>
    <Box w="100%" mt="5" >
        <Flex justifyContent={"space-between"} p="4">
            <Text fontSize={"29px"}>Clients</Text>
            <CreateClient />
          
        </Flex>
        <FilteringClinen />
        <ClientList />
    </Box>
    </Flex>
   
    </Box>
  )
}
