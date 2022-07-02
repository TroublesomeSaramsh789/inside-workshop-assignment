import React from "react";
import { getUsers } from "../api/usersAPI";
import useReactQueryHook from "./../hooks/reactQueryHook";
import User from "./../components/User/User";
import { AuthContext } from './../context/authContext';
import UserDetail from './../components/User/UserDetail';
import { useNavigate } from 'react-router-dom';
import { UserSelectionContext, userSelectionContextType }  from "../context/userSelection";

const UserDashboard = () => {
  const navigate  = useNavigate()
  const AuthData = React.useContext(AuthContext);
  const { isLoading, data, error } = useReactQueryHook(getUsers, "allUsers");

  if (!AuthData.id || !AuthData.token) {
    navigate("/");
  }

  if (isLoading) return <p className="loading-text">Loading</p>;
  if (error) return <p className="error-text">Error Has Ocurred.</p>;
  return (
    <div>
      <h1 className="text-center">Dashboard</h1>
      <UserDetail 
              user_id={AuthData.userData.user_id}
              user_name={AuthData.userData.user_name}
              user_email={AuthData.userData.user_email}
              user_phone={AuthData.userData.user_phone}
              user_type={AuthData.userData.user_type?.toUpperCase()} />
      {AuthData.userType.toLowerCase() === "admin" && (isLoading || <UsersList listData={data} />)}
    </div>
  );
};

const UsersList = ({ listData }: { listData?: any }) => {
  // Context
  const userContext: userSelectionContextType =
    React.useContext(UserSelectionContext);
  if (listData.length === 0) return <p>List Is Empty</p>;
  else {
    // @ts-ignore
    const UserListMapped = () => {
      return listData
        .filter((item: any) => item.user_type.toLowerCase() === "user")
        .filter((item: any) => {
          return !userContext.userSelectedId.includes(item.user_id);
        })
        ?.map((item: any) => {
          return (
            <User
              key={item.user_id}
              user_id={item.user_id}
              user_name={item.user_name}
              user_email={item.user_email}
              user_phone={item.user_phone}
              user_type={item.user_type?.toUpperCase()}
            />
          );
        });
    };
    return (
      <div className="usersList">
        <h2>Users List:</h2>
        <UserListMapped />
      </div>
    );
  }
};

export default UserDashboard;
