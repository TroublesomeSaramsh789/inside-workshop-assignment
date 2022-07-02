import Joi from "joi";

const LoginSchema = Joi.object({
    email: Joi.string().email().normalize(),
    password: Joi.string().normalize()
})

export default LoginSchema