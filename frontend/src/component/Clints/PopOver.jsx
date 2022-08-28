import {
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  IconButton,
  Box,
  Text,
  PopoverBody,
  Flex,
} from "@chakra-ui/react";
import { MdModeEditOutline } from "react-icons/md";
import { AiOutlineEllipsis } from "react-icons/ai";
import React from "react";
import { DeleteIcon } from "@chakra-ui/icons";

export const PopOver = ({onClick}) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  return (
    <Box mt="-4">
      <Popover
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        placement="right"
        color="#65595a"
      >
        <PopoverTrigger>
          <IconButton variant={"ghost"} h="6" size={"md"} icon={<AiOutlineEllipsis />} />
        </PopoverTrigger>
        <PopoverContent p="3">
          <PopoverBody>
            <Box fontSize={"20px"}>
              <Flex
              
                borderTop={"1px solid"}
                borderBottom={"1px solid"}
                borderColor="gray.300"
                p="2"
                cursor="pointer"
              >
                <Text mt="2">
                  <MdModeEditOutline />{" "}
                </Text>
                <Text >Edit Clients</Text>
              </Flex>
              <Flex p="2" cursor="pointer">
                <DeleteIcon color="#ed797b" mt="1" />{" "}
                <Text color={"#ed797b"} onClick={onClick} >
                  {" "}
                  Delete
                </Text>
              </Flex>
            </Box>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};
