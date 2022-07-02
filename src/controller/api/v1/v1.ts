import Express from "express";
import UserController from "./user/UserController";
import LoginController from './login/loginController';

const V1 = Express.Router();

V1.use("/user", UserController);
V1.use("/login", LoginController);


V1.get("/",(req,res)=>{
    res.send({"route":"V1 route"})
})

export default V1;