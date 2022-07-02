import { newPool } from "./../../config/dbConfig";
import { v4 as uuidv4 } from "uuid";
import { InsertUserType } from "./../../../index.d";
import { generateHash } from './../../util/Hash';

const InsertUser =  (userData: InsertUserType) => {
  return generateHash(userData.password).then((data:string) => {
    const { username, email, phone, password, userType } = userData;
    return newPool.connect().then((client) => {
      let hashedPassword = data;
      console.log(hashedPassword)
      return client
        .query(
          `INSERT INTO users (user_name,user_email, user_password, user_phone, user_type, user_id)
        VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
          [username, email, hashedPassword, phone, userType, uuidv4()]
        )
        .then((res) => {
          client.release();
          console.log("ADDED DATA:", res);
          return res.rows;
        })
        .catch((e) => {
          client.release();
          console.log(e);
          return { message: "Unable to add to the database." };
        });
    });
  })
};

export default InsertUser;
