const express = require('express');
const router = express.Router();

const {signUp, login, loggedIn}=require('../controller/user')

const { signUpProfessional, loginProfessional} = require("../controller/Professional")

const multer = require("multer")
const upload = multer({dest:"image/"})

router.post("/signupprofessional", upload.single("image"), signUpProfessional)
router.post("/loginprofessional", loginProfessional)
router.post('/usersignup', signUp);
router.post('/userlogin', login);
router.get("/users/loggedin", loggedIn);


module.exports = router;