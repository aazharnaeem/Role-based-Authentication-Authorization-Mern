const Joi = require('joi');
const { password } = require('./customValidation')


const registerValidaiton = Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required().custom(password),
    role: Joi.string(),
    confirmPassword: Joi.string().required().valid(Joi.ref('password')).messages({
        'any.only': 'Passwords do not match'
    })
})

const loginValidation = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required()
    // .custom(password),
}).options({ allowUnknown: true });

module.exports = {
    registerValidaiton,
    loginValidation
}