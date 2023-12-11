const User = require('../models/User')
const validator = require('validator')

const registerUser = async (req,res) => {
    const {name,email,password,confirmPassword} = req.body;
    // if(!name || !email || password|| !confirmPassword){
    //     return res.status(400).json({error: 'All fields are required'});
    // }
    if(!validator.isEmail(email)){
        return res.status(400).json({ error: 'Invalid email address'});
    }
    if(password!=confirmPassword){
        return res.status(400).json({error: 'passwords not match'})
    }

    try{
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({error:'email is already registered'})
        }
        const newUser = new User({name,email,password});
        await newUser.save();
        res.json({message:'registration successful'})
    }catch(error){
        console.log(error);
        res.status(500).json({error:'Internal server error'})
    }

}
const getAllUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

module.exports = {
    registerUser,
    getAllUsers
}