const  { professional } = require("../model/database")

const getAllProfessional = async (req, res)=>{
    console.log(req.body);
    try {
        const allProfessional= await professional.find({})
        console.log(allProfessional);
        res.json({message: allProfessional})        
    } catch (error) {
        res.status(400).send(error)
        console.error(error);
    }
}

module.exports = getAllProfessional