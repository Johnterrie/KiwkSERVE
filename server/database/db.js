const mongoose = require("mongoose")

const connectDB = async () => {
    mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    }).then(() => {
        console.log('MongoDB connected')
    }).catch((err) => {
        console.log('Error connecting to MongoDB', err.message);
    });
};

module.exports = connectDB;