import { ChevronDownIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import {
  Box,
  Stack,
  Text,

  Flex,
  Divider,
} from "@chakra-ui/react";
import React from "react";

export const TeamTimeSheet = () => {
  return (
    <Box h="120px" border={"1px solid"} borderColor="gray.300">
      <Box borderBottom="1px solid" h="50%">
        <Stack direction="row" h="100%">
          <Box borderRight="1px solid" w="33%" p="4">
            <Text ml="16">
              show:Everyone <ChevronDownIcon color={"black"} />
            </Text>
          </Box>
          <Box borderRight="1px solid" w="33%">
            <Box>
              <Box
                h="50%"
                borderBottom={"1px solid"}
                w="100%"
                borderColor="gray.300"
                textAlign={"center"}
              >
                <Text>This Week</Text>
              </Box>
              <Box>
                <Flex justifyContent={"space-around"} mt="2">
                  <Box>Su</Box>
                  <Box>Mo</Box>
                  <Box>Tu</Box>
                  <Box>We</Box>
                  <Box>Th</Box>
                  <Box>Fr</Box>
                  <Box>Sa</Box>
                </Flex>
              </Box>
            </Box>
          </Box>
          <Box w="33%">
            <Box>
              <Box
                h="50%"
                borderBottom={"1px solid"}
                w="100%"
                borderColor="gray.300"
                textAlign={"center"}
                ml="-1"
              >
                <Text>Last Week</Text>
              </Box>
              <Box>
                <Flex justifyContent={"space-around"} mt="2">
                  <Box>Su</Box>
                  <Box>Mo</Box>
                  <Box>Tu</Box>
                  <Box>We</Box>
                  <Box>Th</Box>
                  <Box>Fr</Box>
                  <Box>Sa</Box>
                </Flex>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Box>
      <Box h="50%">
        <Stack direction="row" h="100%">
          <Box borderRight="1px solid" color={"gray.500"} w="33%" >
            <Box borderBottom="1px solid" borderColor={"gray.300"} h="50%">
              <Text ml="4">Rathod Prabhu</Text>
            </Box>
            <Box>
              <Text ml="4" mt="2">
                Total
              </Text>
            </Box>
          </Box>
          <Box borderRight="1px solid" w="33%" color={"gray.500"}>
          <Box border="1px solid" borderColor={"gray.300"} h="50%" ml="-2">
                <Flex justifyContent={"space-between"} h="100%">
                 <Box><Text></Text> </Box>
                 <Box  borderRight="1px solid" borderColor={"gary.300"} ><Text></Text></Box>
                 <Box  borderRight="1px solid" borderColor={"gary.300"} ><Text></Text></Box>
                 <Box  borderRight="1px solid" borderColor={"gary.300"} ><Text></Text></Box>
                 <Box  borderRight="1px solid" borderColor={"gary.300"} ><Text></Text></Box>
                 <Box  borderRight="1px solid" borderColor={"gary.300"} ><Text></Text></Box>
                 <Box  borderRight="1px solid" borderColor={"gary.300"} ><Text></Text></Box>
                 <Box  borderRight="1px solid" borderColor={"gary.300"} ><Text></Text></Box>
                 <Box ><Text></Text></Box>
        
                 

                </Flex>
              </Box>
            <Box>
              <Text textAlign={"center"}>
            -
              </Text>
            </Box>
          </Box>
          <Box borderRight="1px solid" w="33%" color={"gray.500"}>
          <Box border="1px solid" borderColor={"gray.300"} h="50%" ml="-2">
                <Flex justifyContent={"space-between"} h="100%">
                 <Box><Text></Text> </Box>
                 <Box  borderRight="1px solid" borderColor={"gary.300"} ><Text></Text></Box>
                 <Box  borderRight="1px solid" borderColor={"gary.300"} ><Text></Text></Box>
                 <Box  borderRight="1px solid" borderColor={"gary.300"} ><Text></Text></Box>
                 <Box  borderRight="1px solid" borderColor={"gary.300"} ><Text></Text></Box>
                 <Box  borderRight="1px solid" borderColor={"gary.300"} ><Text></Text></Box>
                 <Box  borderRight="1px solid" borderColor={"gary.300"} ><Text></Text></Box>
                 <Box  borderRight="1px solid" borderColor={"gary.300"} ><Text></Text></Box>
                 <Box ><Text></Text></Box>
        
                 

                </Flex>
              </Box>
            <Box>
              <Text textAlign={"center"}  >
          -
              </Text>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
