const Joi = require('joi');
const { password } = require('./customValidation')


const registerValidaiton = Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required().custom(password),
});

const loginValidation = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required().custom(password),
}).options({ allowUnknown: true });

module.exports = {
    registerValidaiton,
    loginValidation
}