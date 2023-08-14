const express = require('express');
const router = express.Router();

const {signUp, login, loggedIn}=require('../controller/user')

const { signUpProfessional , getAllProfessional, loginProfessional} = require("../controller/Professional")

const multer = require("multer")
const upload = multer({dest:"image/"})

router.get("/getallprofessional", getAllProfessional)
router.post("/signupprofessional", signUpProfessional)
router.post("/loginprofessional", loginProfessional)
router.post('/usersignup', signUp);
router.post('/userlogin', login);
router.get("/users/loggedin", loggedIn);


module.exports = router;