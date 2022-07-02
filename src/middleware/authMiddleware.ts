import { Request, Response, NextFunction } from "express";
import JWT from "jsonwebtoken";

const authorization = (req: Request, res: Response, next: NextFunction) => {

};
export default authorization;

const JWT_Verify = (token: string) => {
  JWT.verify(token, "HELLO THERE");
}