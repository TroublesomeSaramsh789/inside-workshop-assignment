import { newPool } from "./../../config/dbConfig";

const DeleteUser =  (id: string) => {
  return newPool.connect().then((client) => {
     return client
      .query(`DELETE FROM users WHERE user_id = $1 RETURNING * `, [id])
      .then((res) => {
          client.release();
          console.log("DELETED:",res.rows)
            return res.rows;
      })
      .catch((e) => {
        client.release();
        return {message:"Unable to delete."};
      });
  });
};

export default DeleteUser;

