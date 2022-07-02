import axios from 'axios';
const url = `http://localhost:3500`;

export const loginUser = (email: string, password: string) => {
  return axios
    .post(`${url}/api/v1/auth/`, { email, password })
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      throw error;
    });;
}