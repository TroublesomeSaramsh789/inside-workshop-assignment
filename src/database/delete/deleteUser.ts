import { databasePool } from "../../config/databaseConfig";

const DeleteUser = async (id = "") => {
  try {
    if (id) {
      const result = await databasePool(
        `DELETE FROM users WHERE user_id = $1  RETURNING *`,
        [id]
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

export default DeleteUser;
