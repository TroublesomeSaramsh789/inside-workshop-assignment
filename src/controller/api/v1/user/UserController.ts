import Express, { Request, Response } from "express";
import UserSchema from "./../../../../model/schema/userSchema";
import ReadUser from "./../../../../database/read/readUser";
import InsertUser from "./../../../../database/insert/insertUser";
import { InsertUserType } from "./../../../../../index.d";
import UpdateUser from "./../../../../database/update/updateUser";
import DeleteUser from './../../../../database/delete/deleteUser';
import { httpStatusCode } from './../../../../services/httpStatusCodes';
const UserController = Express.Router();

// GET
UserController.get("/",  (req: Request, res: Response) => {
  ReadUser()
    .then((data) => {
      res.status(httpStatusCode.OK).json(data);
    })
    .catch((error) => {
      res.status(httpStatusCode.InternalServerError).send(error);
    });
});
// GET BY ID
UserController.get("/:id",  (req: Request, res: Response) => {
  const id = req.params.id;
  ReadUser(id)
  .then((data) => {
      res.status(httpStatusCode.OK).json(data);
    })
    .catch((error) => {
      res.status(httpStatusCode.InternalServerError).send(error);
    });
});

// POST
UserController.post("/register",  (req: Request, res: Response) => {
  const { username, email, phone, password, userType } = req.body;
  const userData: InsertUserType = {
    username,
    email,
    phone,
    password,
    userType,
  };
  const { error, value } = UserSchema.validate(userData);
  if (error) res.status(httpStatusCode.InternalServerError).json({...error});
  else {
    InsertUser({ ...userData })
      .then((data:any) => {
        res.status(httpStatusCode.Created).json(data);
      })
      .catch((error:any) => {
        res.status(httpStatusCode.InternalServerError).send(error);
      });
  }
});

// PATCH or UPDATE
UserController.patch("/update",  (req: Request, res: Response) => {
  const { username, email, phone, password, userType, user_id } = req.body;
  const userData: InsertUserType = {
    username,
    email,
    phone,
    password,
    userType,
  };
  const { error, value } = UserSchema.validate(userData);
  if (error) res.status(httpStatusCode.InternalServerError).send(error);
  else {
    UpdateUser({ ...userData }, user_id).then((data) => {
      res.status(httpStatusCode.Created).json(data);
    });
  }
});

// DELETE
UserController.delete("/", (req: Request, res: Response) => {
  const {id} = req.body;
  DeleteUser(id).then(data => {
      res.status(httpStatusCode.Created).json(data);
  })
    .catch(error => {
    res.status(httpStatusCode.InternalServerError).send(error);
  })

});
export default UserController;
