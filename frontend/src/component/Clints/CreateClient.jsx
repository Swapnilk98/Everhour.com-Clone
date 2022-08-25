import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";

export const CreateClient = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const inputName = e.target.name;
    // console.log(inputName);
    setFormData({
      ...formData,
      [inputName]: e.target.value,
    });
  };
  const haddleClickClient = () => {
    console.log(formData);
  };
  return (
    <Box mr="10">
      <Button
        onClick={onOpen}
        bgColor="#24be6a"
        borderRadius={"0"}
        color={"white"}
      >
        Create Clients
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Client</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>


            <FormControl>
              <FormLabel>Client name</FormLabel>
              <Input
                type={"text"}
                name="client_Name"
                onChange={handleChange}
                variant="unstyled"
                placeholder="Client name"
              />
            </FormControl>



            <FormControl mt={4}>
              <FormLabel>Projcet name</FormLabel>
              <Select placeholder="Select option" name="selectProject"  onChange={handleChange}>
                <option value="No Projects">No Projects</option>
              </Select>
            </FormControl>



            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input
                type={"email"}
                name="email"
                onChange={handleChange}
                placeholder="Email"
              />
            </FormControl>




            <FormControl mt={4}>
              <FormLabel>Business Details</FormLabel>
              <Textarea
                type={"text"}
                name="add_Bussiness"
                onChange={handleChange}
                // onChange={handleInputChange}
                placeholder="Add Bussiness Deatails"
                size="md"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={haddleClickClient}>
              Create Client
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
