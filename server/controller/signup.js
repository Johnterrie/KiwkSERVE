const bcrypt=require("bcrypt");
const User=require("../model/userSchema");
const {createUser}=require("../validator/registration");
const {StatusCodes}  = require("http-status-codes");

module.exports.signUp = async (req, res)=>{
     const {error,value} = createUser(req.body)
     if( error ) return  res.status(StatusCodes.NOT_ACCEPTABLE).json({error});
     try{
        const userExist=await User.findOne({email: value.email});
        if(userExist){
            res.status(StatusCodes.FORBIDDEN).send("existing user");
        }
        else{
        const salt=await bcrypt.genSalt()
        const hashedPassword=await bcrypt.hash(value.password, salt)
        const user =new User({
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
// app.post("/Signup-account", (req, res) => {
//     const { errors, isValid, value } = createUser(req.body);
//     if (!isValid) {
//       return res.status(400).json(errors);
//     }
//     try {
//       const Signup = new UserName({
//         fullName: value.fullName,
//         userName: value.userName,
//         emailAddress: value.email,
//         password: value.password,
//         createdAt: new Date(),
//       });
//       Signup.save();
//       res.status(200).send("newUser created successfully!!!");
//     } catch (error) {
//       console.error(error);
//       res.status(500).send("Server error.");
//     }
//   });