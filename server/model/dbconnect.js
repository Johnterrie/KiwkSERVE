require("dotenv").config();
const mongoose =require('mongoose');


const url= process.env.COMPASS;

const connectMongoose= ()=>{
   return mongoose.connect(url)
   .then(()=>{
       console.log("Database is connected...");
   })
}
module.exports=connectMongoose;