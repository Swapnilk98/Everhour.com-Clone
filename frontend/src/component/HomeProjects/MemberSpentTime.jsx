import { ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Flex, PopoverTrigger,
    PopoverContent,
    Stack, Text,Popover,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor, 
    Button,
    
    Input,
    
    RadioGroup,
    Radio } from '@chakra-ui/react'

    import { FaSquare } from 'react-icons/fa';
import React, { useState } from 'react'

export const MemberSpentTime = () => {
    const [Filtervalue, setValue] = useState('Active')
    const [GroupByValue, setGroupByValue] = useState('None')

    const [projects, setprojects] = useState("All")
    const [matric, setMatric] = useState("All")


  return (
    <Box h="160px" border={"1px solid"} borderColor="gray.300">
<Box  h="40px" borderBottom={"1px dotted"} borderColor="gray.300">
<Flex gap="10px" m="auto" justifyContent={"space-around"}>
<Box mt="2">
  <Popover>
  <PopoverTrigger>
  <Button  w="180px"h="6"  border="none" variant='outline' mt="-3" justifyContent={"space-between"} >
    <Flex gap="10px">
    <Text fontSize={"12px"}  color={"#a2aab1"}>Group By:</Text>
 <Text fontSize={"14px"}>{GroupByValue}</Text>
    </Flex>
    <ChevronDownIcon  />
 </Button>
    
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <RadioGroup onChange={setGroupByValue} value={GroupByValue}>
      <Stack>
        <Radio value='Member'>Member</Radio>
        <Radio value='Team Group'>Team Group</Radio>
    
      </Stack>
    </RadioGroup>

  </PopoverContent>
</Popover>
  </Box>

  <Box mt="2">
  <Popover>
  <PopoverTrigger>
  <Button  w="160px"h="6"  border="none" variant='outline' mt="-3" justifyContent={"space-between"} >
    <Stack >
    <Flex gap="10px">
    <Text fontSize={"12px"}  color={"#a2aab1"}>Project:</Text>
 <Text fontSize={"14px"}>{projects}</Text>
    </Flex>
    </Stack>
    <ChevronDownIcon  />
 </Button>
    
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <RadioGroup onChange={setprojects} value={projects}>
      <Stack>
        <Radio value='All'>All</Radio>
        <Radio value='Active'>Active</Radio>
        <Radio value='Favorites'>Archived</Radio>
      </Stack>
    </RadioGroup>

  </PopoverContent>
</Popover>
</Box>


  <Box mt="2">
  <Popover>
  <PopoverTrigger>
  <Button  w="160px"h="6"  border="none" variant='outline' mt="-3" justifyContent={"space-between"} >
    <Stack >
    <Flex gap="10px">
    <Text fontSize={"12px"}  color={"#a2aab1"}>Period:</Text>
 <Text fontSize={"14px"}>{Filtervalue}</Text>
    </Flex>
    </Stack>
    <ChevronDownIcon  />
 </Button>
    
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <RadioGroup onChange={setValue} value={Filtervalue}>
      <Stack>
        <Radio value='All'>All</Radio>
        <Radio value='Active'>Active</Radio>
        <Radio value='Favorites'>Favorites</Radio>
      </Stack>
    </RadioGroup>

  </PopoverContent>
</Popover>
</Box>

<Box mt="2">
  <Popover>
  <PopoverTrigger>
  <Button  w="160px"h="6"  border="none" variant='outline' mt="-3" justifyContent={"space-between"} >
    <Stack >
    <Flex gap="10px">
    <Text fontSize={"12px"}  color={"#a2aab1"}>Metric:</Text>
 <Text fontSize={"14px"} >{matric}</Text>
    </Flex>
    </Stack>
    <ChevronDownIcon  />
 </Button>
    
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <RadioGroup onChange={setMatric} value={matric}>
      <Stack>
        <Radio value='Time'>Time</Radio>
        <Radio value='Billable Amount'>Billable Amount</Radio>
        <Radio value='Costs'>Costs</Radio>
        <Radio value='Profit'>Profit</Radio>
        <Radio value='Lost'>Lost</Radio>
    
      </Stack>
    </RadioGroup>

  </PopoverContent>
</Popover>
</Box>
</Flex>
    </Box> 

<Box >
  <Stack direction={"row"} mt="3">
    <Text  ml="40%" mt="1" color={"#d2e9d6"}>

  <FaSquare />

    </Text>
    <Text>Non-billable Time · 7h</Text>
  </Stack>
<Box>
  <Flex>
  <Text mt="3" ml="20%">Smooth-Dock</Text>
  <Box mt="4" w="60%" h="25px" bgColor={"#d2e9d6"}><Text textAlign={"right"}></Text></Box>
  </Flex>
 
</Box>

</Box >
    </Box>
  )
}
