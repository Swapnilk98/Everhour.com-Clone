import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import SimpleSidebar from '../SideBar/SideBar'
import { Search } from './Search'
import FullCalendarApp from './TimeSheet'

export const Time = () => {
  return (
   
        <Box>
        <Flex gap="20px">
            <Box>
                <SimpleSidebar />
            </Box>
            <Box>
           <Search />
          <FullCalendarApp />
            </Box>
        </Flex>
    </Box>
  )
}
