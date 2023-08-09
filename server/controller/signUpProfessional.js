const   {professional}  = require("../model/database")
const  { Professionalschema } = require("../model/joiSchema")
const bcrypt = require('bcrypt')


const signUp =  async (req, res)=>{
    const { error, value } = Professionalschema.validate(req.body);
    // if (password !== confirmPassword) {
    //     res.status(404)({message:"Password do not Match"})
    //   } 
    if(error){
     res.status(400).send(`Validation Error : ${error}`)
    }
        try {
            const hashPassword = await bcrypt.hash(value.password, 10) 
            const prof = new professional({
                firstName: value.firstname,
                lastName: value.lastname,
                rating:  value.rating, 
                phoneNumber: value.phoneNumber,
                profession:  value.profession,
                location: value.location,
                image:  req.path.file,
                email: value.email,
                yearsofexperience: value.yearsofexperience,
                password: hashPassword,
                confirmPassword: hashPassword, 
        })
        const user = await prof.save()
        console.log(user)
        res.status(404).json({"Email already exit":user})
        console.log(user)
    } 
    catch (error) {
        console.log(error)
    }
   
}
module.exports = signUp   