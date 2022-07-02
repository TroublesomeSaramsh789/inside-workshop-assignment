import { Request,Response, NextFunction  } from "express";
const ErrorMiddleWare = ((err: TypeError, req:Request, res:Response, next:NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
export default ErrorMiddleWare;