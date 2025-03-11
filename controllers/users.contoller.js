let User = require('../models/users.model.js')

const {v4: uuidv4} = require('uuid');

//get all users
const getAllUser = async(req,res)=>{
    try {
        const users = await User.find().select({_id:0, name:1, age:1});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send(error.message);
    }

   
    
}

//get Oneuser
const getOneUser = async(req,res)=>{
    try {
        const user = await User.find({id:req.params.id}).select({_id:0, name:1, age:1});
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }

    
}



//create user
const createUser = async(req,res)=>{
  try {

    const newUser =  new User({
        id: uuidv4(),
        name:req.body.name,
        age:Number(req.body.age)
       })
    
       await newUser.save();
    
       res.status(201).json(newUser);
    
  } catch (error) {
    
    res.status(500).send(error.message);
  }
}


const updateUser = async (req, res) => {
    try {
      const id = req.params.id;
      const { name, age } = req.body; 
  
  
      let user = await User.findOne({ id: id });
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
  
      user.name = name || user.name;
      user.age = age !== undefined ? Number(age) : user.age;
  
   
      await user.save();
  
      res.json({ message: "User updated successfully", user });
  
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

  
  // delete user
  const deleteUser= async(req, res) => {

    try {
        await User.deleteOne({id:req.params.id});
        res.status(200).json({mestedsage:"User is deleted successfully"});
    } catch (error) {
        res.status(500).send(error.message);
    }
  
  };
  



module.exports = {getAllUser, getOneUser, createUser, updateUser, deleteUser};