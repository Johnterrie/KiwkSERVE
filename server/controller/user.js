const User = require("../model/userSchema");
const Professional = require("../model/professionalSchema");
const bcrypt = require ("bcryptjs");
const {createUser}=require("../validation/registration");
const {StatusCodes}  = require("http-status-codes");

const { loginUser } = require("../validation/login");


const signUp = async (req, res) => {
  const { error, value } = createUser(req.body);
  if (error) return res.status(StatusCodes.NOT_ACCEPTABLE).json({ error });
  try {
    const userExist = await User.findOne({ email: value.email });
    if (userExist) {
      res.status(StatusCodes.FORBIDDEN).send("existing user");
    } else {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(value.password, salt);
      const user = new User({
        fullName: value.fullName,
        email: value.email,
        password: hashedPassword,
        createdAt: new Date(),
      });
      user.save();

      res.status(StatusCodes.CREATED).json({
          message: "user created successfully"
      });
    }
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_REQUEST).send("user creation failed");
  }
};

const login = async (req, res) => {

  const { error, value } = loginUser(req.body);

  if (error) {
    return res.status(StatusCodes.NOT_ACCEPTABLE).json({ error });
  }

  try {
    const user = await User.findOne({ email: value.email });


    
    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).send("User not found");
    }

    const isMatch = await bcrypt.compare(value.password, user.password);

    console.log(isMatch)

    if (isMatch) {
      return res.status(StatusCodes.UNAUTHORIZED).send("Invalid password right here");
    }

    // User is authenticated
    res.status(StatusCodes.OK).send("User logged in successfully");
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_REQUEST).send("Login failed");
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
