const express = require('express');
const router = express.Router();

const {signUp, login, loggedIn}=require('../controller/user')

const { signUpProfessional , getAllProfessional, loginProfessional} = require("../controller/Professional")

const multer = require("multer")
const upload = multer({dest:"image/"})

router.get("/getallprofessional", getAllProfessional)
router.post("/signuprofessional", upload.single("image"), signUpProfessional)
router.post("/loginprofessional", loginProfessional)
router.post('/professional', signUp);
router.post('/loginuser', login);
router.get("/users/loggedin", loggedIn);


module.exports = router;