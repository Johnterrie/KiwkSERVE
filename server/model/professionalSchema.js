const mongoose  = require("mongoose")

const Professional = new mongoose.Schema({
    
    firstName:{
        type: String,
        minlength:3,
        maxlength:20,
    },
    
    lastName:{
        type: String,
        minlength:3,
        maxlength:20,
    },
    
    phoneNumber: Number,

    profession: String,
    
    location: String,
    
    image :String,
    
    email: {
        type: String,
        required:[true,"Email is Required"],
        unique: true,
        email:true
    },
    
    password: String,
    
    confirmPassword: String,
})



module.exports.professional = mongoose.model("Professional", Professional);

