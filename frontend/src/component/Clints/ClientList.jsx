import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
  Stack,
  Text,
  useDisclosure,
 
} from "@chakra-ui/react";

import axios from 'axios'
import { ChevronDownIcon } from "@chakra-ui/icons";
import { PopOver } from "./PopOver";
import { deleteClients, getClients } from "../../Redux/TimeClient/action";
import { useDispatch } from "react-redux";
export const ClientList = (props) => {
  const {client_Name,selectProject,add_Bussiness,_id}=props
  const [isShown, setIsShown] = useState(true);

  const { onOpen, onClose, isOpen } = useDisclosure()
 const dispatch=useDispatch()
 const haddledelete=()=>
 {
  dispatch(deleteClients(_id)).then(() => {
    dispatch(getClients());
  });
 }
  return (
    <Box
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      p="4"
      w="90%"
      m="auto"
    >
      {isShown ? (
        <div>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            bgColor="#f9f9f9"
          >
            <Box>
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Text>{client_Name}</Text>
                <Box>
                  <Image src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cpath fill='%23FFF' fill-rule='evenodd' stroke='%23E3E3E3' stroke-linecap='round' stroke-linejoin='round' d='M9.425 14.538l4.562 2.396a.576.576 0 00.835-.604l-.87-5.08 3.692-3.595a.576.576 0 00-.316-.985l-5.098-.743L9.926 1.32a.576.576 0 00-1.031 0L6.59 5.927l-5.098.743a.576.576 0 00-.316.985l3.692 3.594-.87 5.08a.576.576 0 00.835.605l4.59-2.396z'/%3E%3C/svg%3E" />
                </Box>
                <Text fontSize={"26px"}>
                {/* <AiOutlineEllipsis /> */}
                <PopOver onClick={haddledelete}/>
                </Text>
              </Stack>
              <Text color={"#b1c7d6"} fontSize={"16px"}>
                {selectProject}
              </Text>
            </Box>
            <Box>
              <Box onClick={onOpen} variant="ghost">
                No budget
                <ChevronDownIcon />
              </Box>

              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Modal Title</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody></ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                      Close
                    </Button>
                    <Button variant="ghost">Secondary Action </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Box>
          </Stack>
        </div>
      ) : (
        <div>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Box>
              <Text>{client_Name}</Text>
              <Text color={"#b1c7d6"} fontSize={"16px"}>
          {selectProject}
              </Text>
            </Box>
            <Box mt="2" mr="4">
              <Text mr="4">No budget</Text>
            </Box>
          </Stack>
        </div>
      )}
      <Divider />
    </Box>
  );
};
