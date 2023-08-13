const Joi=require('joi');

const createUser = (data) => {
    const schema=Joi.object({
        fullName:  Joi.string()
                        .required(),

        email :  Joi.string()
                        .required(),

        password:  Joi.string()
                        .min(8)
                        .max(1024),
    })

    return schema.validate(data);
}

module.exports.createUser = createUser;
