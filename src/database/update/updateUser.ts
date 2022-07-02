import { newPool } from "./../../config/dbConfig";
import { InsertUserType } from "./../../../index.d";
const UpdateUser = (userData: InsertUserType, id: string) => {
  const { username, email, phone, password, userType } = userData;
  return newPool.connect().then((client) => {
    return client
      .query(
        `UPDATE users SET user_name = $1 ,user_email = $2, user_password = $3, user_phone = $4, user_type= $5 WHERE user_id = $6 RETURNING *`,
        [username, email, phone, password, userType, id]
      )
      .then((res) => {
        client.release();
        console.log("UPDATED DATA:", res.rows);
        return res.rows; 
      })
      .catch((e) => {
        client.release();
        console.log(e)
        return { message: "Unable to update to the data." };
      });
  });
};

export default UpdateUser;