import express from "express";
import cors from "cors";
import API_CONTROLLER from './controller/apiController';
import helmet from "helmet";
// @ts-ignore
import dotenv from "dotenv";
import authorization from './middleware/authMiddleware';
import ErrorMiddleWare from './middleware/errorMiddleware';
dotenv.config();

const server = express();
server.use(cors());
server.use(express.urlencoded())
server.use(express.json());
server.use("/api", API_CONTROLLER)
server.use(helmet());
//AUTH
server.use("/",authorization)
server.use(ErrorMiddleWare);

server.get("/",(req,res) => {
    res.send("Hello World")
})

export default server;