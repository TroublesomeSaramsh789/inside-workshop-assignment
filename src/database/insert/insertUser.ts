import { databasePool } from "../../config/databaseConfig";
import { v4 as uuidv4 } from "uuid";
import { InsertUserType } from './../../../index.d';

const InsertUser = async (userData: InsertUserType) => {
  try {
    const { username, email, phone, password, userType } = userData;
    const result = await databasePool(
      `INSERT INTO users (user_name,user_email, user_password, user_phone, user_type, user_id) 
VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [username, email, phone, password, userType, uuidv4()]
    );
    console.log(result);
    if(result.rowCount)
      return result.rows[0];
    else 
      throw {message:"Unable to insert data."}
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default InsertUser;
