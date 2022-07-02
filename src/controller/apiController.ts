import Express from "express";
import V1 from './api/v1/v1';

const API_CONTROLLER = Express.Router();

API_CONTROLLER.use("/v1", V1);

API_CONTROLLER.get("/",(req,res)=>{
    res.send({"route":"API_CONTROLLER Route"})
})

export default API_CONTROLLER;