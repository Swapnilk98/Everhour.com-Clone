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

import { AiOutlineEllipsis } from "react-icons/ai";
import { ChevronDownIcon } from "@chakra-ui/icons";
export const ClientList = () => {
  const [isShown, setIsShown] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          <Stack direction={"row"} justifyContent={"space-between"} bgColor="#f9f9f9">
            <Box>
              <Stack direction={"row"} justifyContent={"space-between"} >
                <Checkbox
               
                
               
                ></Checkbox>{" "}
                <Text>Client 1</Text>
                <Box>
                  <Image src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cpath fill='%23FFF' fill-rule='evenodd' stroke='%23E3E3E3' stroke-linecap='round' stroke-linejoin='round' d='M9.425 14.538l4.562 2.396a.576.576 0 00.835-.604l-.87-5.08 3.692-3.595a.576.576 0 00-.316-.985l-5.098-.743L9.926 1.32a.576.576 0 00-1.031 0L6.59 5.927l-5.098.743a.576.576 0 00-.316.985l3.692 3.594-.87 5.08a.576.576 0 00.835.605l4.59-2.396z'/%3E%3C/svg%3E" />
                </Box>
                <Text fontSize={"26px"}>
                  <AiOutlineEllipsis />
                </Text>
              </Stack>
              <Text color={"#b1c7d6"} fontSize={"16px"} >
                Project one
              </Text>
            </Box>
            <Box>
              <Button
                onClick={onOpen}
                variant="ghost"
                rightIcon={<ChevronDownIcon ml="5px" />}
              >
                No budget{" "}
              </Button>

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
              <Text>Client 1</Text>
              <Text color={"#b1c7d6"} fontSize={"16px"} ml="6">
                Project one
              </Text>
            </Box>
            <Box>
              <Button variant="ghost" mr="10">
                No budget
              </Button>
            </Box>
          </Stack>
        </div>
      )}
      <Divider />
    </Box>
  );
};
