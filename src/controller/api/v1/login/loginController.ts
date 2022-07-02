import Express, {Request, Response} from "express";
import { AuthLogicHandler } from "../../../../model/authLogicHandler";
import LoginSchema from '../../../../model/schema/loginSchema';
import { httpStatusCode } from './../../../../services/httpStatusCodes';
const LoginController = Express.Router();

LoginController.get("/",(req:Request, res:Response)=>{
    res.send({"route":"user route"})
})

LoginController.post("/", (req: Request, res: Response) => {
    const {email, password} = req.body;
    const userData = { email, password };
    const { error, value } = LoginSchema.validate(userData)
    if (error) res.status(httpStatusCode.BadRequest).json({ message: "Bad Credentials." })
    else {
        AuthLogicHandler(email, password)
            .then((data: any) => {
            res.status(httpStatusCode.Accepted).json(data)
            })
            .catch((err:any) => {
            res.status(httpStatusCode.Unauthorized).json(err);
            
        })
    }
    
})

export default LoginController;