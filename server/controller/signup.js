const bcrypt = require("bcrypt");
const User = require("../model/userSchema");
const { createUser } = require("../validation/registration");
const { StatusCodes } = require("http-status-codes");
const { sign } = require("jsonwebtoken");

const signUp = async (req, res) => {
  const {error,value} = createUser(req.body)
  if( error ) return  res.status(StatusCodes.NOT_ACCEPTABLE).json({error});
  try{
     const userExist=await User.findOne({email: value.email});
     if(userExist){
         res.status(StatusCodes.FORBIDDEN).send("existing user");
     }
     else{
      
     const salt= await bcrypt.genSalt(10)
     const hashedPassword=await bcrypt.hash(value.password, salt)

     const user = new User({
             fullName: value.fullName,
             email: value.email,
             password: hashedPassword,
             createdAt: new Date(),
           });
           user.save();
     res.status(StatusCodes.CREATED).send("user created successfully")

     }
  }catch(error){
     console.log(error);
     res.status(StatusCodes.BAD_REQUEST).send("user creation failed")
  }

}

module.exports = signUp