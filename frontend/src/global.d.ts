export type registerUserType = {
  username: string;
  email: string;
  phone: string | number;
  password: string;
  userType: string;
};

export type updateUserType = {
  username: string;
  email: string;
  phone: string | number;
  password: string;
  userType: string;
  user_id:string
};