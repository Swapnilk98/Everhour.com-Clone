import { Box } from '@chakra-ui/react'
import React from 'react'

const LayoutSumary = () => {
  return (
    <Box color="gray.400" fontWeight="600" mt="10px" display="flex" justifyContent="center" alignItems="center" border="1px solid" borderColor="gray.200" h="85vh">
   No data for selected period.
   <Box
        color="white"
        fontWeight="600"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgColor="green.400"
        w="60px"
        h="60px"
        borderRadius="50%"
        fontSize="25px"
        position="absolute"
        top="85%"
        left="88%"
        cursor="pointer"
      >
        ?
      </Box>
    </Box>
  )
}

export default LayoutSumary