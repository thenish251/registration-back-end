const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name :{
        type : String,
        require: true,
    },
    email:{
        type: String,
        require:true,
        unique:true,
        validate:{
        validator:value => validator.isEmail(value),
        message: `{VALUE} is not a valid email`,
    },
    },
    password:{
        type: String,
        require:true,
    },
})

const User = mongoose.model('User',userSchema)
module.exports = User;