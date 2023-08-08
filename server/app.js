const path = require("path");
require("dotenv").config();
const express = require ("express");
const router = require ("./pathRouter/routes");
const connectDB = require("./model/db");
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended:true }))
const PORT = process.env.PORT || 5800


const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions));

app.use(router)
app.listen(5000, async() => {
    await connectDB();
    console.log("server is running on port " + PORT)
});

