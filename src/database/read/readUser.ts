import { databasePool } from "../../config/databaseConfig";

const ReadUser = async (id = "") => {
  try {
  
    if (id) {
      const result = await databasePool(
        `SELECT * FROM users WHERE user_id = $1`,
        [id]
      );
      console.log(result);
      //@ts-ignore
      if (result.rowCount) return result.rows;
      else return { message: "Table is empty." };
    } else {
      const result = await databasePool(`SELECT * FROM users`,[]);
      //@ts-ignore
      if (result.rowCount) return result.rows;
      else return { message: "Table is empty." };
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default ReadUser;
