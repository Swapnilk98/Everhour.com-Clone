const express = require('express');
const app = express();
require('dotenv').config();

const Todologger=require("./Routes/todo.route")
const TodoInpro=require("./Routes/todoInprogress.route")
const TodoComp=require("./Routes/todocomp.route")

const connection = require('./connection/connect');
const PORT = process.env.PORT;

const AuthRouter = require('./routes/auth.route');
const clientController = require('./routes/client.route');

app.use(express.json());


app.get('/', (req, res) => {
  res.send('server is running');
});

app.use(AuthRouter);


app.use("/todo",Todologger)
app.use("/todoin",TodoInpro)
app.use("/todocomp",TodoComp)


app.use("/Clients",clientController);

app.listen(PORT, async () => {
  try {
    await connection;
    console.log('mongoDb connected successfully');
  } catch {
    console.log('error in connecting mongodb');
  }
  console.log(`server is running on server,${PORT}`);
});
