import { Box, CloseButton, Divider, Flex, Image, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { ClintsMainPage } from '../Clints/ClintsMainPage'
import { Home } from '../HomeProjects/Home'
import Setting from '../Payment/Setting'
import OuterLayout from '../Products/OuterLayout'
import SimpleSidebar from '../SideBar/SideBar'
import { Time } from '../Time/Time'

const DashboardMain = () => {
    const [home, sethome] = useState(false)
    const [time, settime] = useState(false)
    const [projects, setprojects] = useState(false)
    const [client, setclient] = useState(false)
    const [setting, setSetting] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure();

    const HandleHome=()=>{
        sethome(true)
        setprojects(false)
        settime(false)
        setclient(false)
        setSetting(false)
    }
    const HandleProject=()=>{
        sethome(false)
        setprojects(true)
        settime(false)
        setclient(false)
        setSetting(false)
    }
    const HandleTime=()=>{
        sethome(false)
        setprojects(false)
        settime(true)
        setclient(false)
        setSetting(false)
    }
    const HandleClient=()=>{
        sethome(false)
        setprojects(false)
        settime(false)
        setclient(true)
        setSetting(false)
    }
    const HandleSetting=()=>{
        sethome(false)
        setprojects(false)
        settime(false)
        setclient(false)
        setSetting(true)
    }

  return (
    <Box display="flex" m="auto" ml="5%" minH="100vh">
        <Box w="13%" border="1px solid" borderColor="gray.300">

        <Flex h="20" cursor="pointer" borderRadius="5px" pl="10px" alignItems="center" mx="5" gap="10px" >
      <Image  w="25px" h="25px" src="https://app.everhour.com/assets/img/everhour_48.svg" />
        <Text fontSize="md">
        Everhour
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>

      <Flex h="12" cursor="pointer" backgroundColor={home ? "#d7f3e3" : ""} _hover={{backgroundColor:"#d7f3e3"}} borderRadius="5px" pl="10px" alignItems="center" mx="5" gap="10px" onClick={HandleHome}>
      <Image  w="25px" h="25px" src="data:image/svg+xml;charset=utf-8,%3Csvg width='20' height='20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18.948 8.666a.63.63 0 00.388.14c.289-.003.544-.208.632-.51a.775.775 0 00-.244-.82L10.366.137a.62.62 0 00-.775 0L.234 7.476a.786.786 0 00-.109.986c.202.31.586.398.884.204l8.97-7.032 8.97 7.032zM12.652 20h3.342c1.107 0 2.005-.986 2.005-2.202V9.54c0-.406-.3-.735-.668-.735-.37 0-.669.33-.669.735v8.258c0 .405-.299.734-.668.734H3.963c-.369 0-.668-.329-.668-.734V9.54c0-.406-.3-.735-.669-.735-.369 0-.668.33-.668.735v8.258c0 1.216.898 2.202 2.005 2.202h8.689z' fill='%23A2AAB1'/%3E%3C/svg%3E" />
        <Text fontSize="md">
        Home
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>

      <Flex h="12" cursor="pointer" backgroundColor={time ? "#d7f3e3" : ""} _hover={{backgroundColor:"#d7f3e3"}} borderRadius="5px" pl="10px" alignItems="center" mx="5" gap="10px" onClick={HandleTime}>
      <Image  w="25px" h="25px" src="data:image/svg+xml;charset=utf-8,%3Csvg width='20' height='20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm0 1.25a8.75 8.75 0 100 17.5 8.75 8.75 0 000-17.5zm.62 3.975a.625.625 0 00-1.245.085v5.287a1 1 0 00.646.935l3.097 1.174.08.025c.3.07.613-.092.726-.388l.024-.081a.625.625 0 00-.387-.725l-2.936-1.113V5.31l-.006-.085z' fill='%23A2AAB1'/%3E%3C/svg%3E" />
        <Text fontSize="md">
        Time
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>

      <Flex h="12" cursor="pointer" backgroundColor={projects ? "#d7f3e3" : ""} _hover={{backgroundColor:"#d7f3e3"}} borderRadius="5px" pl="10px" alignItems="center" mx="5" gap="10px"  onClick={HandleProject}>
      <Image  w="25px" h="25px" src="data:image/svg+xml;charset=utf-8,%3Csvg width='20' height='20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='a' maskUnits='userSpaceOnUse' x='0' y='0' width='20' height='20'%3E%3Cpath d='M20 0H0v20h20V0z' fill='%23fff'/%3E%3C/mask%3E%3Cg mask='url(%23a)'%3E%3Cpath d='M19.398 13.33c.3 0 .547.218.594.503l.008.097v2.41a3.665 3.665 0 01-3.476 3.655l-.195.005H3.671a3.666 3.666 0 01-3.666-3.466L0 16.34v-2.41a.6.6 0 011.196-.097l.008.097v2.41a2.463 2.463 0 002.305 2.455l.162.005h12.658a2.464 2.464 0 002.462-2.298l.005-.162v-2.41a.6.6 0 01.602-.6zM11.036 0a4.008 4.008 0 013.904 3.891L14.939 4 16.881 4c1.638 0 2.986 1.285 3.11 2.938l.009.185v1.574a2.661 2.661 0 01-1.511 2.394l-7.236 3.262a3.059 3.059 0 01-2.582.002L1.539 11.11A2.656 2.656 0 010 8.694V7.11C.034 5.382 1.42 4 3.12 4l1.28-.001v-.106A4.013 4.013 0 018.114.011L8.32 0h2.716zm5.845 5.225H3.119a1.93 1.93 0 00-1.915 1.898v1.57a1.43 1.43 0 00.827 1.3l7.136 3.246a1.88 1.88 0 001.592-.003l7.23-3.26a1.43 1.43 0 00.808-1.282v-1.56c-.021-1.06-.873-1.91-1.916-1.91zM10 9.6a1 1 0 110 2 1 1 0 010-2zM8.336 1.2a2.812 2.812 0 00-2.734 2.708l-.001.091h8.139v-.094a2.808 2.808 0 00-2.551-2.695l-.169-.01H8.336z' fill='%23A2AAB1'/%3E%3C/g%3E%3C/svg%3E" />
        <Text fontSize="md">
        Project
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>

      <Flex h="12" cursor="pointer" backgroundColor={client ? "#d7f3e3" : ""} _hover={{backgroundColor:"#d7f3e3"}} borderRadius="5px" pl="10px" alignItems="center" mx="5" gap="10px"  onClick={HandleClient}>
      <Image  w="25px" h="25px" src="data:image/svg+xml;charset=utf-8,%3Csvg width='20' height='20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='a' maskUnits='userSpaceOnUse' x='0' y='0' width='20' height='20'%3E%3Cpath d='M20 0H0v20h20V0z' fill='%23fff'/%3E%3C/mask%3E%3Cg mask='url(%23a)'%3E%3Cpath d='M13 1.5a1 1 0 011 1V3h3a3 3 0 013 3v10a3 3 0 01-3 3H3a3 3 0 01-3-3V6a3 3 0 013-3h3v-.5a1 1 0 011-1h6zM6 4.199L3 4.2a1.8 1.8 0 00-1.794 1.652L1.2 6v10a1.8 1.8 0 001.652 1.794L3 17.8h14a1.8 1.8 0 001.794-1.652L18.8 16V6a1.8 1.8 0 00-1.652-1.794L17 4.2l-3-.001V4.5a1 1 0 01-1 1H7a1 1 0 01-1-1v-.301zM8 12.5a2.6 2.6 0 012.595 2.436l.005.164v1H9.4v-1a1.4 1.4 0 00-1.265-1.394L8 13.7H5a1.4 1.4 0 00-1.394 1.265L3.6 15.1v1H2.4v-1a2.6 2.6 0 012.436-2.595L5 12.5h3zm-1.5-5a2.1 2.1 0 110 4.2 2.1 2.1 0 010-4.2zM17 10.3a.6.6 0 01.097 1.192L17 11.5h-5a.6.6 0 01-.097-1.192L12 10.3h5zM6.5 8.7a.9.9 0 100 1.8.9.9 0 000-1.8zM17 7.5a.6.6 0 01.097 1.192L17 8.7h-6a.6.6 0 01-.097-1.192L11 7.5h6zm-4.2-4.8H7.2v1.6h5.6V2.7z' fill='%23A2AAB1'/%3E%3C/g%3E%3C/svg%3E" />
        <Text fontSize="md">
        Clients
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>

      <Flex h="12" cursor="pointer"  _hover={{backgroundColor:"#d7f3e3"}} borderRadius="5px" pl="10px" alignItems="center" mx="5" gap="10px">
      <Image  w="25px" h="25px" src="data:image/svg+xml;charset=utf-8,%3Csvg width='20' height='20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='a' maskUnits='userSpaceOnUse' x='0' y='0' width='20' height='20'%3E%3Cpath d='M20 0H0v20h20V0z' fill='%23fff'/%3E%3C/mask%3E%3Cg mask='url(%23a)'%3E%3Cpath d='M10.387 10.466a4.508 4.508 0 014.503 4.301l.005.207v3.116a.588.588 0 01-1.168.095l-.008-.095v-3.117a3.332 3.332 0 00-3.15-3.326l-.182-.005h-5.88a3.332 3.332 0 00-3.326 3.149l-.005.182v3.117a.588.588 0 01-1.168.095L0 18.09v-3.117a4.508 4.508 0 014.301-4.502l.207-.005h5.88zm5.105-.04a4.508 4.508 0 014.503 4.302l.005.206v3.117a.588.588 0 01-1.168.095l-.008-.096v-3.116a3.332 3.332 0 00-3.332-3.331.588.588 0 110-1.176zM12.562 1a4.081 4.081 0 010 8.163.588.588 0 010-1.176 2.905 2.905 0 000-5.811.588.588 0 110-1.176zM7.487 1a4.076 4.076 0 110 8.153 4.076 4.076 0 010-8.153zm0 1.176a2.9 2.9 0 100 5.801 2.9 2.9 0 000-5.801z' fill='%23A2AAB1'/%3E%3C/g%3E%3C/svg%3E" />
        <Text fontSize="md">
        Team
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>

      <Flex h="12" cursor="pointer"  _hover={{backgroundColor:"#d7f3e3"}} borderRadius="5px" pl="10px" mb="20px" alignItems="center" mx="5" gap="10px"  >
      <Image  w="25px" h="25px" src="data:image/svg+xml;charset=utf-8,%3Csvg width='20' height='20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='a' maskUnits='userSpaceOnUse' x='0' y='0' width='20' height='20'%3E%3Cpath d='M20 0H0v20h20V0z' fill='%23fff'/%3E%3C/mask%3E%3Cg mask='url(%23a)'%3E%3Cpath d='M7.537.936a.62.62 0 01-.386.79A8.754 8.754 0 008.57 18.64a8.756 8.756 0 009.453-5.136.62.62 0 011.139.496A9.998 9.998 0 01.035 10.839 9.996 9.996 0 016.747.55a.621.621 0 01.79.385zM10.002 0C15.524 0 20 4.475 20 9.996v.62h-8.963a1.656 1.656 0 01-1.656-1.655V0h.621zm.62 1.263l.001 7.698c0 .2.142.367.33.405l.084.009 7.698-.001-.011-.16a8.757 8.757 0 00-7.939-7.938l-.162-.013z' fill='%23A2AAB1'/%3E%3C/g%3E%3C/svg%3E" />
        <Text fontSize="md">
        Reports
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>

      <Divider />

      <Flex h="16" backgroundColor={setting ? "#d7f3e3" : ""} cursor="pointer" _hover={{backgroundColor:"#d7f3e3"}} borderRadius="5px" pl="10px" alignItems="center" mx="5" gap="10px"  onClick={HandleSetting}>
      <Image  w="25px" h="25px" src="data:image/svg+xml;charset=utf-8,%3Csvg width='20' height='20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9.372 20h1.256a1.843 1.843 0 001.84-1.841v-.425a8.08 8.08 0 001.255-.52l.3.3c.728.729 1.895.711 2.604 0l.888-.886c.709-.709.729-1.876 0-2.604l-.301-.301a8.07 8.07 0 00.52-1.254h.425A1.843 1.843 0 0020 10.628V9.372a1.843 1.843 0 00-1.841-1.84h-.425a8.07 8.07 0 00-.52-1.255l.3-.3c.73-.729.71-1.896 0-2.604l-.886-.887a1.841 1.841 0 00-2.604 0l-.301.3a8.07 8.07 0 00-1.254-.52V1.84A1.843 1.843 0 0010.628 0H9.372a1.843 1.843 0 00-1.84 1.841v.425c-.432.138-.852.312-1.255.52l-.3-.3a1.841 1.841 0 00-2.604 0l-.887.886a1.841 1.841 0 000 2.605l.3.3a8.076 8.076 0 00-.52 1.254H1.84A1.843 1.843 0 000 9.372v1.256c0 1.015.826 1.84 1.841 1.84h.425c.138.432.312.852.52 1.255l-.3.3a1.841 1.841 0 000 2.604l.886.888c.708.708 1.876.73 2.604 0l.301-.301c.403.208.823.382 1.254.52v.425c0 1.015.826 1.841 1.841 1.841zm-1.108-3.274a6.908 6.908 0 01-1.79-.743.589.589 0 00-.713.09l-.613.613a.67.67 0 01-.947 0l-.887-.888a.67.67 0 010-.946l.613-.613a.586.586 0 00.09-.712 6.907 6.907 0 01-.743-1.79.586.586 0 00-.568-.44h-.865a.67.67 0 01-.67-.67V9.373c0-.369.301-.669.67-.669h.865c.268 0 .5-.18.568-.44.162-.628.412-1.23.743-1.79a.586.586 0 00-.09-.712l-.613-.613a.67.67 0 010-.947l.888-.887a.669.669 0 01.946 0l.613.613c.189.189.482.226.712.09a6.907 6.907 0 011.79-.743c.26-.067.44-.3.44-.568v-.865c0-.369.3-.67.67-.67h1.255c.369 0 .669.301.669.67v.865c0 .268.18.501.44.568.628.162 1.23.412 1.79.743.23.136.523.099.712-.09l.613-.613a.67.67 0 01.947 0l.887.888a.669.669 0 010 .946l-.613.613a.586.586 0 00-.09.712c.331.56.581 1.162.743 1.79.067.26.3.44.568.44h.865c.369 0 .67.3.67.67v1.255c0 .369-.301.669-.67.669h-.865c-.267 0-.5.18-.568.44a6.903 6.903 0 01-.743 1.79c-.136.23-.099.523.09.712l.613.613a.67.67 0 010 .947l-.888.887a.67.67 0 01-.946 0l-.613-.613a.586.586 0 00-.712-.09 6.907 6.907 0 01-1.79.743.586.586 0 00-.44.568v.865c0 .369-.3.67-.67.67H9.373a.67.67 0 01-.669-.67v-.865c0-.268-.18-.5-.44-.568z' fill='%23A2AAB1'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.648 10c0 2.4 1.953 4.352 4.352 4.352 2.4 0 4.352-1.953 4.352-4.352 0-2.4-1.953-4.352-4.352-4.352A4.356 4.356 0 005.648 10zm1.172 0A3.183 3.183 0 0110 6.82 3.183 3.183 0 0113.18 10 3.183 3.183 0 0110 13.18 3.183 3.183 0 016.82 10z' fill='%23A2AAB1'/%3E%3C/svg%3E" />
        <Text fontSize="md">
        Settings
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>

      <Divider />

        </Box>
        <Box w="80%" border="1px solid" p="10px" borderColor="gray.300" ml="10px">
        {time ? <Time/> : projects ? <OuterLayout/> : client ? <ClintsMainPage/> : setting ? <Setting/> : <Home/> }
        </Box>
    </Box>
  )
}

export default DashboardMain