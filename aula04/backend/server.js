const express = require('express');
const server = express();
const mongoose = require ('mongoose');
const requireDir = require('require-dir'); 

//Banco de dados
mongoose.connect('mongodb+srv://admin:admin@cluster0-qds64.mongodb.net/cursoReact?retryWrites=true&w=majority',{useNewUrlParser : true, useUnifiedTopology : true})

//Import models
requireDir('./src/models');

//Config
server.use(express.json());

//Routes
server.use('/api',require('./src/routes'));

server.listen(3002);
console.log('Servidor escutando na porta 3002.');