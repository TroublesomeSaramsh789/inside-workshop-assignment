import { newPool } from "./../../config/dbConfig";

const ReadUser =  (id?: string) => {
  return id
    ? newPool.connect().then((client) => {
        return client
          .query(
            `SELECT user_name, user_email, user_phone, user_type, user_id FROM users WHERE user_id = $1`,
            [id]
          )
          .then((res) => {
            client.release();
            return res.rows[0];
          })
          .catch((e) => {
            client.release();
            return { message: "Unable to connect to database." };
          });
      })
    : newPool.connect().then((client) => {
        return client
          .query(`SELECT user_name, user_email, user_phone, user_type, user_id FROM users`,[])
          .then((res) => {
            client.release();
            console.log("READ:", res.rows);
            return res.rows;
          })
          .catch((e) => {
            client.release();
            return { message: "Unable to connect to database." };
          });
      });
}

export default ReadUser;

