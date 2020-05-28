const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    async persistData(req,res){
        const response = await req.body;
        User.create(response);
    }
}