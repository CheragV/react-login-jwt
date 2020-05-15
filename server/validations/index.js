const Joi = require('@hapi/joi');

const UserSchema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
})

const LoginSchema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
})

module.exports = {
    UserSchema,
    LoginSchema
}