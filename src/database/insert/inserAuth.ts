import { newPool } from "./../../config/dbConfig";
import { v4 as uuidv4 } from "uuid";
const InsertAuthLog = (email:string) => {
  return newPool.connect().then((client) => {
    return client
      .query(
        `INSERT INTO auth (user_email, auth_id)
        VALUES ($1, $2) RETURNING *`,
        [email, uuidv4()]
      )
      .then((res) => {
        client.release();
        console.log("ADDED DATA:", res.rows);
        return res.rows;
      })
      .catch((e) => {
        client.release();
        return { message: "Unable to add to the database." };
      });
  });
};

export default InsertAuthLog;
