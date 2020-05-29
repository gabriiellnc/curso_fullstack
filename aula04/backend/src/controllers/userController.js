const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    async persistData(req,res){
        const response = await req.body;
        User.create(response);
        res.json(response);
    },
    //Lista todos os usuários
    async listUsers(req,res){
        const response = await User.find();
        res.json(response);
    },
    //Lista usuário por ID especificado na URL
    async listaUm(req,res){
        const response = await User.findById(req.params.id);
        res.json(response);
    },
    //Lista usuários por sexo especificado na URL
    async listBySex(req,res){
        const response = await User.find({"sex" : req.params.sex});
        res.json(response);
    },
    //Lista usuários que tenham mais do que a idade especificada na URL
    async listByAge(req,res){
        const response = await User.find({"age" : {$gt : req.params.age}});
        res.json(response);
    },
    listManyFields(req,res){
        const response = req.query.fields;
        res.json(response);
    }
}