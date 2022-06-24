const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const userRouter = require('./users/userRouter');

const server = express();
server.use(express.json());
server.use(morgan('tiny'));
server.use(cors());

const port = 8080;

// Set up user router
server.use('/users', userRouter);

server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}!`);
});
