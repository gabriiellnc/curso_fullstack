const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/userController');
const nfController = require('./controllers/nfController');

routes.get('/users',UserController.listUsers);

routes.post('/autentica',UserController.autentica);

routes.post('/login',UserController.loginHeaders);

//Pegar parâmetros da URL ":"
routes.post('/notafiscal/:nf',);

module.exports = routes;