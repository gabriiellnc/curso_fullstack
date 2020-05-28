const express = require('express');
const routes = express.Router();

routes.get('/',function(req,res){
    res.send('Primeira rota.');
});

module.exports = routes;