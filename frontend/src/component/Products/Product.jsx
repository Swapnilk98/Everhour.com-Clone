import React from "react";
import {
  Box,
  Button,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Radio,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";
import EmptyProjects from "./EmptyProjects";
const Product = () => {
    const [project, setproject] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  return (
    <Box border="1px solid" borderColor="gray.200" h="100vh" w="1000px" m="auto" p="20px">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <h1 style={{ fontSize: "24px" }}>Projects</h1>
        <Button style={{ backgroundColor: "#24be6a",color:"white"}} onClick={()=>{onOpen()}} color="whi" size="md">
          Create Project
        </Button>
      </Box>



      <Box display="flex" justifyContent="flex-end" mt="30px" >
        <Menu ml="20px">
          <MenuButton
            borderRadius="md"
            borderWidth="1px"
            _hover={{ bg: "gray.400" }}
            _focus={{ boxShadow: "outline" }}
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            None
          </MenuButton>
          <MenuList>
            <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
              <MenuItemOption value="asc">None</MenuItemOption>
              <MenuItemOption value="avtive">Billing</MenuItemOption>
              <MenuItemOption value="fav">Budget</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton
           ml="20px"
            borderRadius="md"
            borderWidth="1px"
            _hover={{ bg: "gray.400" }}
            _focus={{ boxShadow: "outline" }}
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            Active
          </MenuButton>
          <MenuList>
            <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
              <MenuItemOption value="asc">All</MenuItemOption>
              <MenuItemOption value="avtive">Active</MenuItemOption>
              <MenuItemOption value="fav">Favourates</MenuItemOption>
              <MenuItemOption value="rec">Recent</MenuItemOption>
              <MenuItemOption value="temp">Template</MenuItemOption>
              <MenuItemOption value="bud">Has Budget</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>

        <Input placeholder="Search Projects..." size="md" ml="20px" w="270px" />
      </Box>

   <Box>
    {project ? "":<EmptyProjects/>}
   </Box>


      <>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Project</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <FormControl>
              <FormLabel>Project Name</FormLabel>
              <Input ref={initialRef} />
            </FormControl>

            <FormControl mt={8}>
              <FormLabel>Layout</FormLabel>
              <Radio>Board</Radio>
              <Radio>List</Radio>
            </FormControl>


            <FormControl mt={8}>
              <FormLabel>Client</FormLabel>
              <Menu>
          <MenuButton
            w="100%"
            borderRadius="md"
            borderWidth="1px"
            _focus={{ boxShadow: "outline" }}
            as={Button}
            rightIcon={<ChevronDownIcon />}
            textAlign="left"
          >
            Select Client...
          </MenuButton>
          <MenuList w="300px" p="30px">
          <MenuItem color="blue">Create New Client</MenuItem>
          </MenuList>
        </Menu>
            </FormControl>

<FormControl mt={8}>
<FormLabel>Privacy</FormLabel>
<Menu>
          <MenuButton
            w="100%"
            borderRadius="md"
            borderWidth="1px"
            _focus={{ boxShadow: "outline" }}
            as={Button}
            rightIcon={<ChevronDownIcon />}
            textAlign="left"
          >
          Only selected members
          </MenuButton>
          <MenuList w="400px">
          <MenuItem >Public to team</MenuItem>
          <MenuItem >Only selected members</MenuItem>
          </MenuList>
        </Menu>
</FormControl>

<FormControl mt={8}>
              <FormLabel>Who Can Manage Tasks</FormLabel>
              <Radio>Everyone</Radio>
              <Radio>Only admins</Radio>
            </FormControl>
          </ModalBody>

          <ModalFooter display="flex" justifyContent="flex-start" mt="30px">
            <Button style={{backgroundColor:"#24be6a", color:"white"}} mr={3} onClick={onClose}>
              Create Project
            </Button>
            <Button variant='ghost'>Cancle</Button>
          </ModalFooter>
          <Box fontSize="13px" mb="13px" ml="8px">Learn more by watching tutorial video or reading help docs.</Box>
        </ModalContent>
      </Modal>
    </>
    </Box>
  );
};

export default Product;
