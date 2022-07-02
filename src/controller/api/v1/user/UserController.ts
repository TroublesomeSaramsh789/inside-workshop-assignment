import Express, { Request, Response } from "express";
import UserSchema from "./../../../../model/schema/userSchema";
import ReadUser from "./../../../../database/read/readUser";
import InsertUser from "./../../../../database/insert/insertUser";
import { InsertUserType } from "./../../../../../index.d";
import UpdateUser from './../../../../database/update/updateUser';
import DeleteUser from './../../../../database/delete/deleteUser';
const UserController = Express.Router();

// GET
UserController.get("/", (req: Request, res: Response) => {
  ReadUser()
    .then((data) => {
      res.send(data);
    })
    .catch((data) => {
      res.send(data);
    });
});
// GET BY ID
UserController.get("/:id", (req: Request, res: Response) => {
  const id  = req.params.id;
  ReadUser(id)
    .then((data) => {
      res.send(data);
    })
    .catch((data) => {
      res.send(data);
    });
});

// POST
UserController.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  const { username, email, phone, password, userType } = req.body;
  const userData: InsertUserType = {
    username,
    email,
    phone,
    password,
    userType,
  };
  const { error, value } = UserSchema.validate(userData);
  if (error) res.send(error);
  else {
    InsertUser({ ...userData })
      .then((data) => res.send(data))
      .catch((error) => res.send(error));
  }
});

// PATCH or UPDATE
UserController.patch("/:id", (req: Request, res: Response) => {
  console.log(req.body);
   const id = req.params.id;
  const { username, email, phone, password, userType } = req.body;
  const userData: InsertUserType = {
    username,
    email,
    phone,
    password,
    userType,
  };
  const { error, value } = UserSchema.validate(userData);
  if (error) res.send(error);
  else {
    UpdateUser({ ...userData },id)
      .then((data) => res.send(data))
      .catch((error) => res.send(error));
  }
});

// DELETE
UserController.delete("/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  DeleteUser(id)
    .then((data) => {
      res.send(data);
    })
    .catch((data) => {
      res.send(data);
    });
});
export default UserController;
