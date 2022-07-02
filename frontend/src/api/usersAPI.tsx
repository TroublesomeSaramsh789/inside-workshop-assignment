import axios from 'axios';
import { registerUserType, updateUserType } from '../global';
const url = `http://localhost:3500`;

export const getUsers = async () => {
    return axios
      .get(`${url}/api/v1/user`)
      .then((data) => {
        return data.data;
      })
      .catch((error) => {
        throw error;
      });
}
export const getUsersByID = async (id:string) => {
    return axios
      .get(`${url}/api/v1/user/${id}`)
      .then((data) => {
        return data.data;
      })
      .catch((error) => {
        throw error;
      });
}
export const deleteUsersByID = async (id: string) => {
  return axios
    .delete(`${url}/api/v1/user/`, {
      data : {id}
    })
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const registerUser = async (userData: registerUserType) => {
  return axios.post(`${url}/api/v1/user/register`,{...userData}).then((data) => {
      return data.data;
    })
    .catch((error) => {
      throw error;
    });;
}

export const updateUser = async (userData: updateUserType) => {
  return axios
    .patch(`${url}/api/v1/user/update`, { ...userData })
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      throw error;
    });
};