/* eslint linebreak-style: ["error", "windows"] */
const express = require('express');
// import to track requests coming into the server. it will be printed on the command line.
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const port = 8080;
const db = ['dan'];

app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.get('/', (req, res) => {
  res.send('Hello Worldddd!');
});

app.post('/addUser', (req, res) => {
  // send HTTP 200 as a response to tell the user it has been
  db.push(req.body.name);
  console.log(db);
  res.sendStatus(200);
});

app.get('/getUser', (req, res) => {
  res.send(db);
});

app.delete('/deleteUser/:name', (req, res) => {
  const { name } = req.params;
  console.log(name);
  const index = db.indexOf(name);
  console.log(req.params);
  if (index > -1) {
    db.splice(index, 1); // 2nd parameter means remove one item only
    console.log('if test');
  }
  // console.log(db);
  res.send(db);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}!`);
});
