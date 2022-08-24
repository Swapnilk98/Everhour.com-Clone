const express = require('express');
const app = express();
require('dotenv').config();
const connection = require('./connection/connect');
const PORT = process.env.PORT;

const AuthRouter = require('./routes/auth.route');
app.use(express.json());
app.get('/', (req, res) => {
  res.send('server is running');
});
app.use(AuthRouter);
app.listen(PORT, async () => {
  try {
    await connection;
    console.log('mongoDb connected successfully');
  } catch {
    console.log('error in connecting mongodb');
  }
  console.log(`server is running on server,${PORT}`);
});
