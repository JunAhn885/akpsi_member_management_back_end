/* eslint linebreak-style: ["error", "windows"] */
const express = require('express');

const app = express();
const port = 8080;
const db = {};

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello Worldddd!');
});

app.post('/addUser', (req, res) => {
  console.log(req.body);
  // send HTTP 200 as a response to tell the user it has been
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}!`);
});
