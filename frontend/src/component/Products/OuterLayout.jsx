import { ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Button, Input, Menu, MenuButton, MenuItem, MenuItemOption, MenuList, MenuOptionGroup, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import LayoutActivity from './LayoutActivity'
import LayoutBoard from './LayoutBoard'
import LayoutList from './LayoutList'
import LayoutSumary from './LayoutSumary'
import ProjectCreation from './ProjectCreation'

const OuterLayout = () => {
    const [summary, setSummary] = useState(false)
    const [list, setList] = useState(false)
    const [board, setboard] = useState(false)
    const [activity, setActivity] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: noBudgetisOpen,onOpen: noBudgetonOpen,onClose: noBudgetonClose,} = useDisclosure();


    const HandleActivity=()=>{
        setActivity(true)
        setList(false)
        setSummary(false)
        setboard(false)
    }
    const HandleList=()=>{
        setActivity(false)
        setList(true)
        setSummary(false)
        setboard(false)
    }
    const HandleSummary=()=>{
        setActivity(false)
        setList(false)
        setSummary(true)
        setboard(false)
    }
    const Handleboard=()=>{
        setActivity(false)
        setList(false)
        setSummary(false)
        setboard(true)
    }
  return (
    <Box display="flex" mt="10px">
      <Box width="300px" border="1px solid" borderColor="gray.200"></Box>
    <Box>
        {/* //Top Navbar */}
        <Box
          h="90px"
          w="1400px"
          border="1px solid"
          borderColor="gray.200"
          mb="-10px"
          borderBottom="none"
        >
          <Box display="flex" justifyContent="space-between" pr="30px">
            <Box w="1400px" pl="40px" alignItems="center" display="flex">
              <Box fontWeight="600" fontSize="20px" mr="30px">
                Kaustubh
              </Box>
              <Box>
                <Menu>
                  <MenuButton as={Button}>...</MenuButton>
                  <MenuList>
                    <MenuItem>Client</MenuItem>
                    <MenuItem>Billing</MenuItem>
                    <MenuItem>Budget</MenuItem>
                    <MenuItem>Members</MenuItem>
                    <MenuItem>Edit Project</MenuItem>
                    <MenuItem>Copy Project</MenuItem>
                    <MenuItem>Convert to template</MenuItem>
                    <MenuItem>View Archieved Selections</MenuItem>
                    <MenuItem>Recently Deleted Task</MenuItem>
                    <MenuItem>Archieve</MenuItem>
                    <MenuItem color="red">Delete</MenuItem>
                    <MenuItem></MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              <Box>
                <Button
                  h="20px"
                  w="20px"
                  fontSize="10px"
                  onClick={onOpen}
                  borderRadius="20%"
                  border="1px solid grey"
                >
                  <i className="fa-solid fa-dollar-sign"></i>
                </Button>
              </Box>
            </Box>

            <Box display="flex">
              <Button
                onClick={noBudgetonOpen}
                color="grey"
                fontSize="14px"
                fontWeight="400"
              >
                {" "}
                No Budget{" "}
              </Button>

              <Menu ml="20px">
                <MenuButton
                  w="120px"
                  borderRadius="md"
                  borderWidth="1px"
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  textAlign="left"
                  fontSize="15px"
                  color="grey"
                >
                  All
                </MenuButton>
                <MenuList>
                  <MenuOptionGroup
                    defaultValue="asc"
                    title="Order"
                    type="radio"
                  >
                    <MenuItemOption value="asc">All</MenuItemOption>
                    <MenuItemOption value="avtive">Open</MenuItemOption>
                    <MenuItemOption value="fav1">My Task</MenuItemOption>
                    <MenuItemOption value="fav2">My Time</MenuItemOption>
                    <MenuItemOption value="fav3">No Estimate</MenuItemOption>
                  </MenuOptionGroup>
                </MenuList>
              </Menu>

              <Input w="100px" placeholder="Serach" />
            </Box>
          </Box>

          <Box display="flex" fontSize="15px" mt="13px" pl="30px" mb="-30px">
            <Box onClick={HandleSummary} cursor="pointer" mr="15px" ml="10px">
              Summary
            </Box>
            <Box onClick={HandleList} cursor="pointer" mr="15px" ml="10px">
              List
            </Box>
            <Box
              borderBottom="3px solid"
              pb="10px"
              borderBottomColor="green.300"
              cursor="pointer"
              mr="15px"
              ml="10px"
              onClick={Handleboard}
            >
              Board
            </Box>
            <Box onClick={HandleActivity} cursor="pointer" mr="15px" ml="10px">
              Activity
            </Box>
          </Box>
        </Box>

        {list ? <LayoutList/> : activity ? <LayoutActivity/> : summary ? <LayoutSumary/>:<ProjectCreation/>}

   </Box>

   </Box>
  )
}

export default OuterLayout