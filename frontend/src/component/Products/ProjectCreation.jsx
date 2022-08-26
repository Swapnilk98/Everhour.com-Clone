import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import StopWatch from "./Timer/StopWatch";
import axios from 'axios'


const ProjectCreation = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: noBudgetisOpen,onOpen: noBudgetonOpen,onClose: noBudgetonClose,} = useDisclosure();
  const [inputTodo, setinputTodo] = useState(false);
  const [inProgressinputTodo, setInProgressinputTodo] = useState(false);
  const [completedinputTodo, setCompletedinputTodo] = useState(false);
  const [todo, settodo] = useState({});
  const [todos, setTodos] = useState([]);
  const [inProgresstodos, setInProgressTodos] = useState([]);
  const [completedtodos, setCompletedTodos] = useState([]);
  const [completedtodo, setCompletedTodo] = useState(false);
  const [stopwatch, setstopwatch] = useState(false)
  const [inProgressStopwatch, setInProgressStopwatch] = useState(false)
  const [completedStopwatch, setCompletedStopwatch] = useState(false)



  var countTodo = todos.length;
  var countInprogressTodo = inProgresstodos.length;
  var countCompletedTodo = completedtodos.length;
  var count=0

  // Creating object
  const handleOnChangeTodoSave = (e) => {
    const { value, name } = e.target;
    settodo({
      ...todo,
      [name]: value,
    });
  };
 
  // Getting Todos
 const GetTodos=()=>{
  axios.get("http://localhost:8000/todo").then((res)=>{
    setTodos(res.data)
  })

  axios.get("http://localhost:8000/todoin").then((res)=>{
    setInProgressTodos(res.data)
  })

  axios.get("http://localhost:8000/todocomp").then((res)=>{
    setCompletedTodos(res.data)
  })
 }

  // Deleting Todos
  const HandleTodoDelete=(id)=>{
   axios.delete(`http://localhost:8000/todo/delete/${id}`).then((r)=>{
    count++
   })
  }
  const HandleTodoInprogressDelete=(id)=>{
    axios.delete(`http://localhost:8000/todoin/delete/${id}`).then((r)=>{
     count++
    })
   }
   const HandleTodoCompDelete=(id)=>{
    axios.delete(`http://localhost:8000/todocomp/delete/${id}`).then((r)=>{
     count++
    })
   }

  //  Posting Todos
  const HandleaddTodo = () => {
    setinputTodo(!inputTodo);
    if(todo){
      axios.post("http://localhost:8000/todo/create",todo).then((res)=>{
        settodo("")
      })
    }
    
  };

  const HandleaddTodoInprogress = () => {
    setInProgressinputTodo(!inProgressinputTodo);
    if (todo) {
      console.log("Inpro",todo)
      axios.post("http://localhost:8000/todoin/create",todo).then((res)=>{
        settodo("")
      })
    }
  };
   
  const HandleaddTodoCompleted = () => {
    setCompletedinputTodo(!completedinputTodo);
    if (todo) {
      console.log("Comp",todo)
      axios.post("http://localhost:8000/todocomp/create",todo).then((res)=>{
        settodo("")
      })
    }
  };

  useEffect(() => {
    GetTodos()
    if(countTodo==1)
  {
    todos.pop()
  } 
  }, [todo,countTodo,count,todos,inProgresstodos,completedtodos])

  return (
    <Box display="flex" mt="10px">
      <Box>
        {/* Todo Saggregation */}

        {/* Todo */}
        <Box
          h="90vh"
          display="flex"
          mt="10px"
          border="1px solid"
          borderColor="gray.200"
        >
          <Box w="300px" mr="20px" h="90vh">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p="20px"
            >
              <Box fontWeight="500">
                {" "}
                To Do{" "}
                <span
                  style={{
                    backgroundColor: "lightblue",
                    marginLeft: "10px",
                    fontSize: "14px",
                    borderRadius: "5px",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                  }}
                >
                  {countTodo}
                </span>
              </Box>
              <Box display="flex" alignItems="center" color="grey">
                <Box onClick={HandleaddTodo} cursor="pointer">
                  +
                </Box>
                <Menu>
                  <MenuButton mt="-10px" as={Button}>
                    ...
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Rename</MenuItem>
                    <MenuItem>Collapse Section</MenuItem>
                    <MenuItem>Copy...</MenuItem>
                    <MenuItem>Move...</MenuItem>
                    <MenuItem>List of Tasks</MenuItem>
                    <MenuItem>Archieve</MenuItem>
                    <MenuItem color="red">Delete</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </Box>
            <Box color="gray.400" textAlign="left" mt="-15px" pl="20px">
              oh
            </Box>
            <Box>
              {todos.length > 0
                ? todos.map((elem) => {
                    return (
                      <Box
                        border="1px solid"
                        borderColor="gray.200"
                        borderLeft="3px solid"
                        borderLeftColor="blue.300"
                        h="80px"
                        m="10px"
                      >
                        <Box
                          display="flex"
                          alignItems="center"
                          p="10px"
                          justifyContent="space-between"
                        >
                          <div>{elem.todo}</div>
                          <Box>
                            <Menu>
                              <MenuButton mt="-10px" as={Button}>
                                ...
                              </MenuButton>
                              <MenuList>
                                <MenuItem>Add Time</MenuItem>
                                <MenuItem>Add Estimate...</MenuItem>
                                <MenuItem>Set Due Date</MenuItem>
                                <MenuItem>Close</MenuItem>
                                <MenuItem>Copy...</MenuItem>
                                <MenuItem>Move...</MenuItem>
                                <MenuItem onClick={()=>HandleTodoDelete(elem._id)} color="red">Delete</MenuItem>
                              </MenuList>
                            </Menu>
                          </Box>
                        </Box>

                        <Box
                          textAlign="left"
                          pl="10px"
                          color="gray.400"
                          cursor="pointer"
                          _hover={{ color: "green" }}
                        >
                          {stopwatch ? <StopWatch/> : <Box onClick={()=>setstopwatch(!stopwatch)}><i className="fa-solid fa-circle-play"></i></Box>}
                          
                        </Box>
                      </Box>
                    );  
                  })
                : ""}
            </Box>
            <Box>
              {inputTodo ? (
                <Input
                  width="90%"
                  name="todo"
                  onChange={handleOnChangeTodoSave}
                  placeholder="Task name ..."
                  pb="30px"
                  h="70px"
                  mt="20px"
                  mb="2px"
                />
              ) : (
                ""
              )}
            </Box>
            <Button
              onClick={HandleaddTodo}
              _hover={{ color: "blue.300" }}
              fontSize="14px"
              style={
                inputTodo
                  ? { backgroundColor: "#24be6a", color: "white" }
                  : { backgroundColor: "white" }
              }
              color="gray.400"
              mt="25px"
              bg="white"
              // ml="-150px"
            >
              + Add Task
            </Button>
          </Box>

          {/* Inprogress */}

          <Box w="300px" mr="20px" h="90vh">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p="20px"
            >
              <Box fontWeight="500">
                {" "}
                In Progress{" "}
                <span
                  style={{
                    backgroundColor: "lightblue",
                    marginLeft: "10px",
                    fontSize: "14px",
                    borderRadius: "5px",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                  }}
                >
                  {countInprogressTodo}
                </span>
              </Box>
              <Box display="flex" alignItems="center" color="grey">
                <Box onClick={HandleaddTodoInprogress} cursor="pointer">
                  +
                </Box>
                <Menu>
                  <MenuButton mt="-10px" as={Button}>
                    ...
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Rename</MenuItem>
                    <MenuItem>Collapse Section</MenuItem>
                    <MenuItem>Copy...</MenuItem>
                    <MenuItem>Move...</MenuItem>
                    <MenuItem>List of Tasks</MenuItem>
                    <MenuItem>Archieve</MenuItem>
                    <MenuItem color="red">Delete</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </Box>
            <Box color="gray.400" textAlign="left" mt="-15px" pl="20px">
              oh
            </Box>
            <Box>
              {inProgresstodos.length > 0
                ? inProgresstodos.map((elem) => {
                    return (
                      <Box
                        border="1px solid"
                        borderColor="gray.200"
                        borderLeft="3px solid"
                        borderLeftColor="blue.300"
                        h="80px"
                        m="10px"
                      >
                        <Box
                          display="flex"
                          alignItems="center"
                          p="10px"
                          justifyContent="space-between"
                        >
                          <div>{elem.todoInprogress}</div>
                          <Box>
                            <Menu>
                              <MenuButton mt="-10px" as={Button}>
                                ...
                              </MenuButton>
                              <MenuList>
                                <MenuItem>Add Time</MenuItem>
                                <MenuItem>Add Estimate...</MenuItem>
                                <MenuItem>Set Due Date</MenuItem>
                                <MenuItem>Close</MenuItem>
                                <MenuItem>Copy...</MenuItem>
                                <MenuItem>Move...</MenuItem>
                                <MenuItem onClick={()=>HandleTodoInprogressDelete(elem._id)} color="red">Delete</MenuItem>
                              </MenuList>
                            </Menu>
                          </Box>
                        </Box>

                        <Box
                          textAlign="left"
                          pl="10px"
                          color="gray.400"
                          cursor="pointer"
                          _hover={{ color: "green" }}
                        >
                          {inProgressStopwatch ? <StopWatch/> : <Box onClick={()=>setInProgressStopwatch(!inProgressStopwatch)}><i className="fa-solid fa-circle-play"></i></Box>}
                        </Box>
                      </Box>
                    );
                  })
                : ""}
            </Box>
            <Box>
              {inProgressinputTodo ? (
                <Input
                  width="90%"
                  name="todoInprogress"
                  onChange={handleOnChangeTodoSave}
                  placeholder="Task name ..."
                  pb="30px"
                  h="70px"
                  mt="20px"
                  mb="2px"
                />
              ) : (
                ""
              )}
            </Box>
            <Button
              onClick={HandleaddTodoInprogress}
              _hover={{ color: "blue.300" }}
              fontSize="14px"
              style={
                inProgressinputTodo
                  ? { backgroundColor: "#24be6a", color: "white" }
                  : { backgroundColor: "white" }
              }
              color="gray.400"
              mt="25px"
              bg="white"
              // ml="-150px"
            >
              + Add Task
            </Button>
          </Box>

          {/* Completed */}

          <Box w="300px" mr="20px" h="90vh">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p="20px"
            >
              <Box fontWeight="500">
                {" "}
                Completed{" "}
                <span
                  style={{
                    backgroundColor: "lightblue",
                    marginLeft: "10px",
                    fontSize: "14px",
                    borderRadius: "5px",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                  }}
                >
                  {countCompletedTodo}
                </span>
              </Box>
              <Box display="flex" alignItems="center" color="grey">
                <Box onClick={HandleaddTodoCompleted} cursor="pointer">
                  +
                </Box>
                <Menu>
                  <MenuButton mt="-10px" as={Button}>
                    ...
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Rename</MenuItem>
                    <MenuItem>Collapse Section</MenuItem>
                    <MenuItem>Copy...</MenuItem>
                    <MenuItem>Move...</MenuItem>
                    <MenuItem>List of Tasks</MenuItem>
                    <MenuItem>Archieve</MenuItem>
                    <MenuItem color="red">Delete</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </Box>
            <Box color="gray.400" textAlign="left" mt="-15px" pl="20px">
              oh
            </Box>
            <Box>
              {completedtodos.length > 0
                ? completedtodos.map((elem) => {
                    return (
                      <Box
                        border="1px solid"
                        borderColor="gray.200"
                        borderLeft="3px solid"
                        borderLeftColor="blue.300"
                        h="80px"
                        m="10px"
                      >
                        <Box
                          display="flex"
                          alignItems="center"
                          p="10px"
                          justifyContent="space-between"
                        >
                          <div>{elem.todoCompleted}</div>
                          <Box>
                            <Menu>
                              <MenuButton mt="-10px" as={Button}>
                                ...
                              </MenuButton>
                              <MenuList>
                                <MenuItem>Add Time</MenuItem>
                                <MenuItem>Add Estimate...</MenuItem>
                                <MenuItem>Set Due Date</MenuItem>
                                <MenuItem>Close</MenuItem>
                                <MenuItem>Copy...</MenuItem>
                                <MenuItem>Move...</MenuItem>
                                <MenuItem  onClick={()=>HandleTodoCompDelete(elem._id)} color="red">Delete</MenuItem>
                              </MenuList>
                            </Menu>
                          </Box>
                        </Box>

                        <Box
                          textAlign="left"
                          pl="10px"
                          color="gray.400"
                          cursor="pointer"
                          _hover={{ color: "green" }}
                        >
                  {completedStopwatch ? <StopWatch/> : <Box onClick={()=>setCompletedStopwatch(!completedStopwatch)}><i className="fa-solid fa-circle-play"></i></Box>}

                        </Box>
                      </Box>
                    );
                  })
                : ""}
            </Box>
            <Box>
              {completedinputTodo ? (
                <Input
                  width="90%"
                  name="todoCompleted"
                  onChange={handleOnChangeTodoSave}
                  placeholder="Task name ..."
                  pb="30px"
                  h="70px"
                  mt="20px"
                  mb="2px"
                />
              ) : (
                ""
              )}
            </Box>
            <Button
              onClick={HandleaddTodoCompleted}
              _hover={{ color: "blue.300" }}
              fontSize="14px"
              style={
                completedinputTodo
                  ? { backgroundColor: "#24be6a", color: "white" }
                  : { backgroundColor: "white" }
              }
              color="gray.400"
              mt="25px"
              bg="white"
              // ml="-150px"
            >
              + Add Task
            </Button>
          </Box>

          {/* Add more Section */}

          <Box w="300px" mr="20px" h="90vh">
            <Box
              color="gray.600"
              fontWeight="600"
              textAlign="left"
              mt="25px"
              pl="-15px"
            >
              + Add Section
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Question Mark ? */}

      <Box
        color="white"
        fontWeight="600"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgColor="green.400"
        w="60px"
        h="60px"
        borderRadius="50%"
        fontSize="25px"
        position="absolute"
        top="85%"
        left="92%"
      >
        ?
      </Box>

      {/* Modal for pages */}

      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Project Billing</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Billing</FormLabel>
                <Menu>
                  <MenuButton width="100%" textAlign="left" as={Button}>
                    Non Billable
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Non Billable</MenuItem>
                    <MenuItem>T&M(Project rate)</MenuItem>
                    <MenuItem>T&M(Member rate)</MenuItem>
                    <MenuItem>Fixed-fee</MenuItem>
                  </MenuList>
                </Menu>
              </FormControl>

              <FormControl width="100%">
                <FormLabel>Budget</FormLabel>
                <Menu>
                  <MenuButton width="100%" textAlign="left" as={Button}>
                    No Budget
                  </MenuButton>
                  <MenuList>
                    <MenuItem>No Budget</MenuItem>
                    <MenuItem>Total hours</MenuItem>
                    <MenuItem>Total costs</MenuItem>
                  </MenuList>
                </Menu>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button backgroundColor="#24be6a" mr={3} onClick={onClose}>
                Save
              </Button>
              <Button variant="ghost">Cancle</Button>
            </ModalFooter>
            <Box mb="20px" fontSize="13px" textAlign="center">
              Learn more by watching tutorial video or reading help docs.
            </Box>
          </ModalContent>
        </Modal>
      </>

      <>
        <Modal isOpen={noBudgetisOpen} onClose={noBudgetonClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Project Billing</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Billing</FormLabel>
                <Menu>
                  <MenuButton width="100%" textAlign="left" as={Button}>
                    Non Billable
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Non Billable</MenuItem>
                    <MenuItem>T&M(Project rate)</MenuItem>
                    <MenuItem>T&M(Member rate)</MenuItem>
                    <MenuItem>Fixed-fee</MenuItem>
                  </MenuList>
                </Menu>
              </FormControl>

              <FormControl width="100%">
                <FormLabel>Budget</FormLabel>
                <Menu>
                  <MenuButton width="100%" textAlign="left" as={Button}>
                    No Budget
                  </MenuButton>
                  <MenuList>
                    <MenuItem>No Budget</MenuItem>
                    <MenuItem>Total hours</MenuItem>
                    <MenuItem>Total costs</MenuItem>
                  </MenuList>
                </Menu>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                backgroundColor="#24be6a"
                mr={3}
                onClick={noBudgetonClose}
              >
                Save
              </Button>
              <Button variant="ghost">Cancle</Button>
            </ModalFooter>
            <Box mb="20px" fontSize="13px" textAlign="center">
              Learn more by watching tutorial video or reading help docs.
            </Box>
          </ModalContent>
        </Modal>
      </>
    </Box>
  );
};

export default ProjectCreation;
