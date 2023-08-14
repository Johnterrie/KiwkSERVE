const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const user = mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  
  email: { 
    type: String, 
    required: true 
  },
  
  password: { 
    type: String, 
    required: true 
  }

});

//password encryption
user.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  //hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
  next();
});


// create JWT
user.methods.createJWT = async function () {
  return jwt.sign(
    { userId: this._id, name: this.name },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES,
    }
  );
};

// to compare password
user.methods.comparePassword = async function (userpassword) {
  const isMatch = await bcrypt.compare(userpassword, this.password);
  return isMatch;
};

module.exports =  mongoose.model('User', user);
