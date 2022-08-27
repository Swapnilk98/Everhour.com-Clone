import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function SplitScreen() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"left"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"} padding={"40px"}>
          <Heading fontSize={{ base: "1xl", md: "4xl", lg: "3xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "100px",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                zIndex: -1,
              }}
            >
              Everhour has helped 240,000+ people complete over 135 million
              tasks in 3 million projects
            </Text>
            <br />{" "}
          </Heading>
          <Text fontSize={{ base: "sm", lg: "lg" }} color={"gray.500"}>
            Everhour helps us track our engineering hours which is a requirement
            for several Government grants we have received. Without Everhour, we
            would be unable to accurately track the hours associated with each
            individual project we are working on as a company. The reports are
            easily customizable which allows me to extract the data I need.
            Everhour is a great tool for our time tracking needs!
          </Text>
          <Text>
            Kelly Bonneau, CPA<br></br> Accounting Manager at 7shifts
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}></Stack>
        </Stack>
      </Flex>
      <Flex flex={1} pt={20} h={600}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://blog-cdn.everhour.com/assets/images/new-design/illustrations/customers/customer-kelly.webp"
          }
        />
      </Flex>
    </Stack>
  );
}
