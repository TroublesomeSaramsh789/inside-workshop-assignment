import Express, {Request, Response} from "express";
import LoginSchema from '../../../../model/schema/loginSchema';
const LoginController = Express.Router();

LoginController.get("/",(req:Request, res:Response)=>{
    res.send({"route":"user route"})
})

LoginController.post("/", (req:Request, res:Response) => {
    console.log(req.body);
    const {email, password} = req.body;
    const userData = {email, password };
    const { error, value } = LoginSchema.validate(userData)
    res.send({value:value, error: error});
})

export default LoginController;