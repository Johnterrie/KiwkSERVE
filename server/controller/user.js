const User = require("../model/userSchema");

const signUp = async (req, res) => {
  console.log(req.body)


  const { fullName, email, password } = req.body;
  // empty field check
  try {
    if (!email || !fullName || !password) {
      res.status(404);
      throw new Error("Please fill in name, email or password");
    }
    // user exist check
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(404);
      throw new Error("User is already Registered");
    }
    //create user
    const user = await User.create({
      name: fullName,
      email: email,
      password: password,
    });
    //generate token
    const token = User.createJWt();
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

const login = async (req, res) => {
  const { email, password } = req.body;
  // validate request
  if (!email || !password) {
    res.status(400);
    throw new Error("Please add email and password");
  }
  // check if the user exists
  const user = await User.findOne({ email });
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
    const { _id, email, name } = user;
    res.status(201).json({
      _id,
      email,
      name,
    });
  } else {
    res.status(400);
    throw new Error("Please Enter valid Credentials");
  }
};

const loggedIn = async (req, res) => {
  const token = req.cookies.token;
  // check for no token
  if (!token) {
    return res.json(false);
  }
  // verify token
  const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
  if (verifyToken) {
    return res.json(true);
  }
  return res.json(false);
};

module.exports = {
  signUp,
  login,
  loggedIn,
};
