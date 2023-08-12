const Joi=require('joi');

const createUser = (data) => {
    const schema= Joi.object({
        fullName:  Joi.string(),
        email :  Joi.string(),
        password:  Joi.string(),
    })
    return schema.validate(data);
}
module.exports.createUser=createUser;
