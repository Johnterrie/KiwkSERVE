const express = require("express")
const router = express.Router();
const signUpProfessional = require("../controller/signUpProfessional")
const getAllProfessional = require("../controller/getAllProfessional")
const multer = require("multer")
const upload = multer({dest:"image/"})


router.post("/signUpProfessional", upload.single("image"), signUpProfessional)
router.get("/getAllProfessional", getAllProfessional)

module.exports = router;