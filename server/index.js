const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const PORT = 5000;

const server = express();

server.use(logger('dev'), bodyParser.json());

// endpoints
server.get("/", (req, res) => {
  res.json({message: "hello"})
})

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
