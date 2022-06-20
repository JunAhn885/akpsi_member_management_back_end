const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

const port = 8080;
const db = ['dan'];

app.get('/', (req, res) => {
  res.send('Hello Worldddd!');
});

app.post('/addUser', (req, res) => {
  db.push(req.body.name);
  res.sendStatus(200);
});

app.get('/getUser', (req, res) => {
  res.send(db);
});

app.delete('/deleteUser/:name', (req, res) => {
  const { name } = req.params;
  const index = db.indexOf(name);
  if (index > -1) {
    db.splice(index, 1);
  }
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}!`);
});
