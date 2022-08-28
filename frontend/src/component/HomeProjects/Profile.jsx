import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const Profile = () => {
  return (
    <Box  >
       
            <Box ml="47%" w="40px" h="40px" ><Image borderRadius={"50px"} src="https://d36887svjhykt4.cloudfront.net/users/1187460-163046300a05ca.jpg" /> </Box>

            <Text ml="43%" mt="3" fontFamily="Lato, sans-serif" fontSize={"12px"} color="gray.300">Click to view details</Text>
    </Box>
  )
}
