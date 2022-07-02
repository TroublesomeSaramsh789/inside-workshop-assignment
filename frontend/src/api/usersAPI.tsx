import axios from 'axios';
const url = `http://localhost:3500`;
export const getUsers = () => {
 console.log(url);
    return axios
      .get(`${url}/api/v1/user`)
      .then((data) => {
        return data.data;
      })
      .catch((error) => {
        throw error;
      });
}
export const getUsersByID = (id:string) => {
    return axios
      .get(`${url}/api/v1/user/${id}`)
      .then((data) => {
        return data.data;
      })
      .catch((error) => {
        throw error;
      });
}
