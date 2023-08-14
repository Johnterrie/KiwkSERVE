const  Professional  = require("../model/professionalSchema");
// const { Professionalschema } = require("../validation/ProfessionalSchema");

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
  
  const { fullName, email, password, phoneNumber, location, profession } = req.body;
  // empty field check
  console.log(fullName, email, password, phoneNumber, location, profession);

  try {
    if (!email || !fullName || !password || !location || !profession || !phoneNumber) {
      res.status(404);
      throw new Error("Please fill in name, email or password");
    }

    // user exist check
    const userExists = await Professional.findOne({ email });
    if (userExists) {
      res.status(404);
      throw new Error("User is already Registered");
    }

    //create user
    const user = await Professional.create({
      name: fullName,
      email: email,
      password: password,
      location: location,
      profession: profession,
      phoneNumber: phoneNumber
    });

    //generate token
    const token = Professional.createJWt();
    //send http-only cookie

    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400),
      sameSite: "none",
      secure: true,
    });
    // display user
    if (user) {
      const { _id, name, email } = user;
      res.status(201) /
        json({
          _id,
          name,
          email,
        });
    } else {
      res.status(404);
      throw new Error("Email is Already Registered");
    }
  } catch (error) {
   res.status(400).json({
      status: "Error",
      message: error.message
   })
  }
};

const loginProfessional = (req, res) => {

}

module.exports = {
  signUpProfessional,
  getAllProfessional,
  loginProfessional
};
