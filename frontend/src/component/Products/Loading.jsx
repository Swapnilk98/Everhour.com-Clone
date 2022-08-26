import { Box, Image } from '@chakra-ui/react'
import React from 'react'

const Loading = () => {
  return (
    <Box w="700px" m="auto" mt="200px">
        <Box fontSize="20px" color="gray.500">Please wait a second while we are retrieving, loading and calculating your data</Box>
        <Image src='https://cdn.dribbble.com/users/976458/screenshots/9734171/googledots5.gif'/>
    </Box>
  )
}

export default Loading