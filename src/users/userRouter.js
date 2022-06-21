const express = require('express');

const router = express.Router();
const db = ['dan'];

const addUserHandler = (req, res) => {
  db.push(req.body.name);
  res.sendStatus(200);
};

const getUserHandler = (req, res) => {
  res.send(db);
};

const deleteUserHandler = (req, res) => {
  const { name } = req.params;
  const index = db.indexOf(name);
  if (index > -1) {
    db.splice(index, 1);
  }
  res.sendStatus(200);
};

router.post('/addUser', addUserHandler);
router.get('/getUsers', getUserHandler);
router.delete('/deleteUser/:name', deleteUserHandler);

module.exports = router;
