import Joi from "joi";

const UserSchema = Joi.object({
    username: Joi.string(),
    email: Joi.string().email(),
    phone: Joi.number().positive(),
    password: Joi.string(),
    userType: Joi.string()
})

export default UserSchema