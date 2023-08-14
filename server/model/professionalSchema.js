const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const ProfessionalSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 20,
  },

  phoneNumber: Number,

  profession: String,

  location: String,

  email: {
    type: String,
    required: [true, "Email is Required"],
    unique: true,
    email: true,
  },

  password: String,
});

//password encryption
ProfessionalSchema.pre("save", async function (next) {
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
ProfessionalSchema.methods.createJWT = function () {
  return jwt.sign(
    { userId: this._id, name: this.name },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES,
    }
  );
};

// to compare password
ProfessionalSchema.methods.comparePassword = async function (userpassword) {
  const isMatch = await bcrypt.compare(userpassword, this.password);
  return isMatch;
};

module.exports = mongoose.model("Professional", ProfessionalSchema);
