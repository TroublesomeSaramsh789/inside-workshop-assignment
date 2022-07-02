import { databasePool } from "../../config/databaseConfig";
import { InsertUserType } from './../../../index.d';

const UpdateUser = async (userData: InsertUserType, id = "") => {
    try {
          const { username, email, phone, password, userType } = userData;
    if (id) {
      const result = await databasePool(
        `UPDATE users SET user_name = $1 ,user_email = $2, user_password $3, user_phone = $4, user_type= $5 WHERE user_id = $6 RETURNING *`,
        [username, email, phone, password, userType, id]
      );
      console.log(result);
      //@ts-ignore
      if (result.rowCount) return result.rows;
      else return { message: "Table is empty." };
    } else {
      return { message: "Id is needed." };
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default UpdateUser;
