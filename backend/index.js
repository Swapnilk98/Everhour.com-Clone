const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json())
const {connection}=require("./connection/connect");
const TodoModel = require('./Model/todo.model');
const Todologger=require("./Routes/todo.route")
const TodoInpro=require("./Routes/todoInprogress.route")
const TodoComp=require("./Routes/todocomp.route")

const PORT = process.env.PORT || 8000;

app.get('/', async(req, res) => {
   res.send("Wlcome to Home ")
});

app.use("/todo",Todologger)
app.use("/todoin",TodoInpro)
app.use("/todocomp",TodoComp)

app.listen(PORT, async() => {
  try{
    await connection
    console.log(`server is running on server,${PORT}`);
  }
 catch(err){
  console.log(err)
 }
});
