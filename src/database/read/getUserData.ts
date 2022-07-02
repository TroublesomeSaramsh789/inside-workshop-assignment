import { newPool } from "../../config/dbConfig";

const getUserData =  (email: string) => {
  return newPool.connect().then((client) => {
        return client
          .query(
            `SELECT * FROM users WHERE user_email = $1`,
            [email]
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
    
}

export default getUserData;

