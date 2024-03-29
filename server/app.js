const path = require("path");
require("dotenv").config();
const express = require ("express");
const router = require ("./route/routes"); 
const connectDB = require("./database/db");
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended:true }))
const PORT = process.env.PORT || 5000

const User = require("./model/userSchema")
const Professionals = require("./model/professionalSchema")
const {professionals} = require("./data/data")

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions));

app.use("/", router)
app.listen(PORT, async() => {
    setInterval(() => {
    connectDB();
    }, 10000)
    console.log("server is running on port " + PORT)
});
