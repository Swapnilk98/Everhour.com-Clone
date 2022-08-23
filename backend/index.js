const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 8000;
app.get('/', (req, res) => {
  res.send('server is running');
});

app.listen(PORT, () => {
  console.log(`server is running on server,${PORT}`);
});
