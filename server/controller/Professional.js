const { Professional } = require("../model/professionalSchema");
const { Professionalschema } = require("../validation/ProfessionalSchema");
const bcrypt = require("bcryptjs");

const getAllProfessional = async (req, res)=>{
    console.log(req.body);

    try {
        const allProfessional= await Professional.find({})
        console.log(allProfessional);
        res.json({message: allProfessional})        
    } catch (error) {
        res.status(400).send(error)
        console.error(error);
    }
}

const signUpProfessional = async (req, res) => {
  const { error, value } = Professionalschema.validate(req.body);
  // if (password !== confirmPassword) {
  //     res.status(404)({message:"Password do not Match"})
  //   }
  if (error) {
    res.status(400).send(`Validation Error : ${error}`);
  }

  try {
    const hashPassword = await bcrypt.hash(value.password, 10);
    const prof = new Professional({
      firstName: value.firstname,
      lastName: value.lastname,
      rating: value.rating,
      phoneNumber: value.phoneNumber,
      profession: value.profession,
      location: value.location,
      image: req.path.file,
      email: value.email,
      yearsofexperience: value.yearsofexperience,
      password: hashPassword,
      confirmPassword: hashPassword,
    });
    const user = await prof.save();
    console.log(user);
    res.status(404).json({ "Email already exit": user });
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};

const loginProfessional = (req, res) => {

}

module.exports = {
  signUpProfessional,
  getAllProfessional,
  loginProfessional
};
