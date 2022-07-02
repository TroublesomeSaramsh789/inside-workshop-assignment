import getUserData from "../database/read/getUserData";
import JWT from "jsonwebtoken";
import { generateHash, validateHash } from "./../util/Hash";
export const AuthLogicHandler = (email: string, password: string) => {
  return new Promise((resolve, reject) => {
    generateHash(password).then((hashedData) => {
      getUserData(email)
        .then((result) => {
          validateHash(password, result.user_password)
            .then((valid) => {
              if (valid) {
                let jwt = jwtCreator(result);
                resolve({ token: jwt, id:result.user_id });
              } else reject({ message: "Invalid Email or Password." });
            })
            .catch((err) => {
              reject(err);
            });
        })
        .catch((err) => {
          reject({ message: "Internal Server Error" });
        });
    });
  });
};

const jwtCreator = (data: any) => {
  const createdAt = new Date().toISOString();
  const payload = {
    createdAt,
    userId: data.user_id,
    user_type: data.user_type,
  };
  let jwt = JWT.sign(payload, "HELLO THERE");
  console.log(jwt);
  return jwt;
};
