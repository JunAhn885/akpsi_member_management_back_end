const request = require('supertest');
const express = require('express');
const userRouter = require('../../src/users/userRouter');

const mockServer = express();
mockServer.use(express.json());
mockServer.use('/', userRouter);

describe('userRouter tests', () => {
  test('getUserHandler test', () => request(mockServer)
    .get('/getUsers')
    .expect(200));

  test('addUserHandler test', () => request(mockServer)
    .post('/addUser')
    .send({ name: 'jun' })
    .then(() => request(mockServer)
      .get('/getUsers')
      .expect(['dan', 'jun'])));

  test('deleteUserHandler test1', () => request(mockServer)
    .delete('/deleteUser/dan')
    .then(() => request(mockServer)
      .get('/getUsers')
      .expect(['jun'])));

  test('deleteUserHandler test2', () => request(mockServer)
    .delete('/deleteUser/david')
    .then(() => request(mockServer)
      .get('/getUsers')
      .expect(['jun'])));
});
