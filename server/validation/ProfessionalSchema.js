const  Joi = require("joi")

const Professionalschema = Joi.object({
                firstName: Joi.string().required(),

                lastName: Joi.string().required(),
                
                rating:  Joi.string().required(), 
                
                phoneNumber: Joi.string().required(),
                
                profession:  Joi.string().required(),
                
                location: Joi.string().required(),
                
                image:  Joi.string(),
                
                email: Joi.string().required(),
                
                yearsofexperience: Joi.string().required(),
                
                password: Joi.string(),
                
                confirmPassword: Joi.string(),
})

module.exports.Professionalschema = Professionalschema