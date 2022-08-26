import { Box, Button, Image, Input, InputGroup, InputRightElement, Menu, MenuButton, MenuDivider, MenuItemOption, MenuList, MenuOptionGroup, Text } from '@chakra-ui/react'
import React from 'react'
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { Navigate, useNavigate } from 'react-router';

const Subscribe = () => {
    const navigate=useNavigate()
  return (
    <Box mt="40px">
        <Box textAlign="left" fontSize="16px" mb="10px">Select Plan</Box>
        <Box display="flex" alignItems="center">
        <Menu closeOnSelect={false}>
  <MenuButton  as={Button} w="440px" rightIcon={<ChevronDownIcon/>} border="1px solid" borderColor="gray.300" textAlign="left">
    Team Plan (Monthly)
  </MenuButton>
  <MenuList minWidth='440px'>
    <MenuOptionGroup defaultValue='asc' type='radio'>
      <MenuItemOption value='asc'>Team Plan Monthly</MenuItemOption>
      <MenuItemOption value='desc'>Team Plan Annual</MenuItemOption>
    </MenuOptionGroup>
  </MenuList>
</Menu>
<Text fontSize="15px" color="gray.500"ml="20px" cursor="pointer"
                    _hover={{ color: "blue" }}>Billing History</Text>
        </Box>

        <Box textAlign="left" mt="40px" fontSize="16px" mb="10px">Pay Today</Box>
        <Box fontSize="25px" textAlign="left" fontWeight="600">$50.00 <span style={{fontSize:"16px",color:"gray"}}>($50 minimum price)</span></Box>

        <Box textAlign="left" mt="40px" fontSize="15px" mb="10px">
            Your credit card details (securely processed via Stripe)</Box>
            <Box w="700px" p="20px"  border="1px solid" borderColor="green.300" borderRadius="10px">
              <Box display="flex">
                <Box>
                    <Box>
                        <Box textAlign="left">Card Number</Box>
                        <InputGroup>
                  <Input
                    borderBottomLeftRadius={"0px"}
                    borderBottomRightRadius={"0px"}
                    placeholder="1234 1234 1234 1234"
                    required
                    maxLength={16}
                    w="360px"
                  />

                  <InputRightElement
                    w={"120px"}
                    gap={"3px"}
                    children={
                      <>
                        <Image
                          src={
                            "https://js.stripe.com/v3/fingerprinted/img/visa-729c05c240c4bdb47b03ac81d9945bfe.svg"
                          }
                        />
                        <Image
                          src={
                            "https://js.stripe.com/v3/fingerprinted/img/mastercard-4d8844094130711885b5e41b28c9848f.svg"
                          }
                        />
                        <Image
                          src={
                            "https://js.stripe.com/v3/fingerprinted/img/amex-a49b82f46c5cd6a96a6e418a6ca1717c.svg"
                          }
                        />
                        <Image
                          src={
                            "https://js.stripe.com/v3/fingerprinted/img/unionpay-8a10aefc7295216c338ba4e1224627a1.svg"
                          }
                        />
                      </>
                    }
                  />
                </InputGroup>
                    </Box>
                </Box>
                <Box ml="30px">
                    <Box textAlign="left" fontSize="15px">Expiration Month</Box>
                    <Box>
                        <select style={{width:"130px",height:"40px",paddingLeft:"10px",paddingRight:"10px",border:"1px solid grey",borderRadius:"8px"}}>
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                            <option>05</option>
                            <option>06</option>
                            <option>07</option>
                            <option>08</option>
                            <option>09</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </select>
                    </Box>
                </Box>
                <Box>
                    <Box textAlign="left" fontSize="15px" ml="20px">Expiration Year</Box>
                    <Box>
                        <select style={{width:"130px",height:"40px",paddingLeft:"10px",paddingRight:"10px",border:"1px solid grey",borderRadius:"8px",marginLeft:'20px'}}>
                            <option>2030</option>
                            <option>2029</option>
                            <option>2028</option>
                            <option>2027</option>
                            <option>2026</option>
                            <option>2025</option>
                            <option>2024</option>
                            <option>2023</option>
                            <option>2022</option>
                        </select>
                    </Box>
                </Box>
              </Box>

              <Box mt="40px" display="flex">
                <Box w="50%">
                    <Box textAlign="left">Name on Card</Box>
                    <Input placeholder='John Smith' pl="20px"/>
                </Box>
                <Box ml="20px"> 
                    <Box textAlign="left">CVV</Box>
                    <Input placeholder='123'/>
                </Box>
              </Box>
              <Box textAlign="left" color="gray.600" fontSize="14px" mt="30px" _hover={{color:"blue"}} cursor="pointer">I have a coupoun code</Box>
              <Box display="flex" mt="30px">
                 <Button mr="30px" bgColor="#24be6a" color="white" onClick={()=>navigate("/otp")}>Pay Now</Button>
                 <Button>Cancle</Button>
              </Box>
            </Box>
    </Box>
  )
}

export default Subscribe