import { ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Checkbox, Stack, Text,Popover,
    PopoverTrigger,
    PopoverContent,
    
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor, 
    Button,
    
    Input,
    
    RadioGroup,
    Radio} from '@chakra-ui/react'
import React from 'react'

export const FilteringClinen = () => {
    const [Filtervalue, setValue] = React.useState('Active')
    const [GroupByValue, setGroupByValue] = React.useState('None')


    
  return (
    <Box bgColor="#f9f9f9" h="14"  p="4" margin={"auto"} m="auto" >
        <Stack spacing={5} direction='row'  justifyContent="space-between" m="auto">
  <Checkbox mt="-3">SelectAll</Checkbox>
  <Stack direction='row' justifyContent="space-around">
 
  <Box>
  <Popover>
  <PopoverTrigger>
  <Button  w="160px"h="12" borderColor={"#24be6a"} borderRadius="none" variant='outline' mt="-3" justifyContent={"space-between"} >
    <Stack >
    <Text lineHeight={"3px"} color={"#b1c7d6"} fontSize={"12px"}>Group By:</Text>
 <Text >{GroupByValue}</Text>
    </Stack>
    <ChevronDownIcon  />
 </Button>
    
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <RadioGroup onChange={setGroupByValue} value={GroupByValue}>
      <Stack>
        <Radio value='None'>None</Radio>
        <Radio value='Budget'>Budget</Radio>
        <Radio value='Project'>Project</Radio>
      </Stack>
    </RadioGroup>

  </PopoverContent>
</Popover>
  </Box>


  <Box>
  <Popover>
  <PopoverTrigger>
  <Button  w="160px"h="12" borderColor={"#24be6a"} borderRadius="none" variant='outline' mt="-3" justifyContent={"space-between"} >
    <Stack >
    <Text lineHeight={"3px"} color={"#b1c7d6"} fontSize={"12px"}>Fiilter:</Text>
 <Text >{Filtervalue}</Text>
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
  <Box >

  <Input  mt="-2" w="60"placeholder='Search Clients..' size='md' borderRadius={"none"} />
  </Box>
  </Stack>
  
</Stack>
    </Box>
  )
}
