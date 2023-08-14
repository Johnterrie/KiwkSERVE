const  Professional  = require("../model/professionalSchema");

const signUpProfessional = async (req, res) => {
  console.log(req.body)

  const { fullName, email, password, phoneNumber, location, profession } = req.body;
  // empty field check
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
    const token = user.createJWT();
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
      const professionals = await Professional.find({}).select("-password");
      res.status(201).json({
        status: "success",
        loggedIn: true,
        professionals,
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

const loginProfessional = async (req, res) => {
 const { email, password } = req.body;
  // validate request
  if (!email || !password) {
    res.status(400);
    throw new Error("Please add email and password");
  }
  // check if the user exists
  const user = await Professional.findOne({ email });
  if (!user) {
    res.status(404);
    throw new Error("User is not registered please sign up");
  }
  // check password
  const isCorrectPassword = await user.comparePassword(password);
  if (!isCorrectPassword) {
    res.status(400);
    throw new Error("Incorret password");
  }
  // generate token
  const token = user.createJWT();
  // send http-only token
  res.cookie("token", token, {
    path: "/",
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 86400),
    sameSite: "none",
    secure: true,
  });

  if (user && isCorrectPassword) {
    const professionals = await Professional.find({}).select("-password");
    res.status(201).json({
      status: "success",
      loggedIn: true,
      professionals,
    });
  } else {
    res.status(400);
    throw new Error("Please Enter valid Credentials");
  }
}

module.exports = {
  signUpProfessional,
  loginProfessional
};
