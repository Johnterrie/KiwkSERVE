const  mongoose  = require("mongoose")

const professional = new mongoose.Schema({
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
    rating: {
        type: Number,
        default: 0
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
    yearsofexperience: Number,
    password: String,
    confirmPassword: String,
})



module.exports.professional = mongoose.model("Professional", professional);

