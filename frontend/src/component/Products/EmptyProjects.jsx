import { Box } from '@chakra-ui/react'
import React from 'react'

const EmptyProjects = () => {
  return (
    <Box h="60vh" color="gray.500" display="flex" flexDirection="column" justifyContent={"center"} alignItems="center">
    <hr style={{height:"1px", width:"100%",marginBottom:"50px"}}/>
    <hr style={{height:"1px", width:"100%",marginBottom:"30px"}}/>   
   <Box mb="50px"> No projects to display...</Box> 
    <hr style={{height:"1px", width:"100%",marginBottom:"50px"}}/>
    <hr style={{height:"1px", width:"100%",marginBottom:"30px"}}/>
   </Box>
  )
}

export default EmptyProjects