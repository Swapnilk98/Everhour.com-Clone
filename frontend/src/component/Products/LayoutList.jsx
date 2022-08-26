import { Box, Button, Input, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import StopWatch from "./Timer/StopWatch";
import axios from 'axios'


const LayoutList = () => {
const [todos, setTodos] = useState([])
const [stopwatch, setstopwatch] = useState(false)
const [stopwatchComp, setstopwatchComp] = useState(false)
const [stopwatchIn, setstopwatchIn] = useState(false)
const [InProgressTodos, setInProgressTodos] = useState([])
const [CompletedTodos, setCompletedTodos] = useState([])

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
let count=0
let countTodo=todos.length
let countInprogress=InProgressTodos.length
let countCompleted=CompletedTodos.length

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

useEffect(() => {
GetTodos()
}, [count,countTodo,countInprogress,countCompleted])


  return (
    <Box mt="10px" p="30px" border="1px solid" borderColor="gray.200" h="88vh" overflow="scroll">
      {/* Todo */}
      <Box mb="30px">
        <Box display="flex" alignItems="center" >
            <Box fontSize="22px" fontWeight="600" mr="20px">To Do</Box>
             <Box fontSize="18px" borderRadius="50%" bgColor="gray.200" h="30px" w="30px" textAlign="center">{countTodo}</Box>
             <Box>
             <Menu>
                  <MenuButton  fontSize="18px" mt="-10px" as={Button}>
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
        <Box color="gray.400" textAlign="left">
          oh
        </Box>
        <Box mt="20px">
        {todos.map((elem)=>{
          return <Box mt="20px">
              <Box display="flex" alignItems="center">
                <input type="checkbox"/>
                <Box ml="20px" mr="30px" fontSize="20px">{elem.todo}</Box>
                <Box cursor="pointer" mr="40px">
                {stopwatch ? <StopWatch/> : <Box color="gray.400" onClick={()=>setstopwatch(!stopwatch)}><i className="fa-solid fa-circle-play"></i></Box>}
                </Box>
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
          </Box>
        })}
        </Box>
        <Box mt="20px" width="800px">
          <Input placeholder="Task name..."/>
        </Box>
        <Box display="flex" justifyContent="flex-start" mt="20px">
          <Button color="white" bgColor="#24be6a">Add Task</Button>
          <Button>Cancle</Button>
        </Box>
      </Box>
 
 <hr></hr>

      {/* Inprogress */}
      <Box mt="50px" alignItems="center" mb="30px">
        <Box display="flex" alignItems="center" >
            <Box fontSize="22px" fontWeight="600" mr="20px">In Progress</Box>
             <Box fontSize="18px" borderRadius="50%" textAlign="center" bgColor="gray.200" h="30px" w="30px">{countInprogress}</Box>
             <Box>
             <Menu>
                  <MenuButton  fontSize="18px" mt="-10px" as={Button}>
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
        <Box color="gray.400" textAlign="left">
          oh
        </Box>
        <Box mt="20px">
        {InProgressTodos.map((elem)=>{
          return <Box mt="20px">
              <Box display="flex" alignItems="center">
                <input type="checkbox"/>
                <Box ml="20px" mr="30px" fontSize="20px">{elem.todoInprogress}</Box>
                <Box cursor="pointer" mr="40px">
                {stopwatchIn ? <StopWatch/> : <Box color="gray.400" onClick={()=>setstopwatchIn(!stopwatchIn)}><i className="fa-solid fa-circle-play"></i></Box>}
                </Box>
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
          </Box>
        })}
        </Box>
        <Box mt="20px" width="800px">
          <Input placeholder="Task name..."/>
        </Box>
        <Box display="flex" justifyContent="flex-start" mt="20px">
          <Button color="white" bgColor="#24be6a">Add Task</Button>
          <Button>Cancle</Button>
        </Box>
      </Box>

      <hr></hr>
      {/* Completed */}
      <Box mt="50px" alignItems="center">
        <Box display="flex" alignItems="center" >
            <Box fontSize="22px" fontWeight="600" mr="20px">Completed</Box>
             <Box fontSize="18px" borderRadius="50%" bgColor="gray.200" h="30px" w="30px" textAlign="center">{countCompleted}</Box>
             <Box>
             <Menu>
                  <MenuButton  fontSize="18px" mt="-10px" as={Button}>
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
        <Box color="gray.400" textAlign="left">
          oh
        </Box>
        <Box mt="20px">
        {CompletedTodos.map((elem)=>{
          return <Box mt="20px">
              <Box display="flex" alignItems="center">
                <input type="checkbox"/>
                <Box ml="20px" mr="30px" fontSize="20px">{elem.todoCompleted}</Box>
                <Box cursor="pointer" mr="40px">
                {stopwatchComp ? <StopWatch/> : <Box color="gray.400" onClick={()=>setstopwatchComp(!stopwatchComp)}><i className="fa-solid fa-circle-play"></i></Box>}
                </Box>
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
                                <MenuItem onClick={()=>HandleTodoCompDelete(elem._id)} color="red">Delete</MenuItem>
                              </MenuList>
                            </Menu>
                </Box>
              </Box>
          </Box>
        })}
        </Box>
        <Box mt="20px" width="800px">
          <Input placeholder="Task name..."/>
        </Box>
        <Box display="flex" justifyContent="flex-start" mt="20px">
          <Button color="white" bgColor="#24be6a">Add Task</Button>
          <Button>Cancle</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LayoutList;
