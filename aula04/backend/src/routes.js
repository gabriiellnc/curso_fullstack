const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/userController');

routes.post('/user',UserController.persistData);
routes.get('/user',UserController.listUsers);
routes.get('/userUm/:id',UserController.listaUm);
routes.get('/userAge/:age',UserController.listByAge);
routes.get('/userSex/:sex',UserController.listBySex);
routes.get('/userFields/:fields',UserController.listManyFields);
module.exports = routes;