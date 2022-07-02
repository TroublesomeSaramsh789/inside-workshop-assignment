import React from "react";
import { getUsers } from "../api/usersAPI";
import useReactQueryHook from "./../hooks/reactQueryHook";
import User from "./../components/User/User";

const UserDashboard = () => {
  const data = useReactQueryHook(getUsers, "allUsers");
  console.log(data);
  return (
    <div>
        <h1 className="text-center">Dashboard</h1>
       <UsersList listData={data} />{" "}
    </div>
  );
};

const UsersList = ({ listData }: { listData?: any }) => {
  if (!listData)
    return (
      <>
        <p>List Is Empty</p>
      </>
    );
  else {
    console.log("ListData", listData);
    // @ts-ignore
    const UserListMapped = () =>
      listData.map((item: any) => {
        return (
          <User
            key={item.user_id}
            user_name={item.user_name}
            user_email={item.user_email}
            user_phone={item.user_phone}
            user_type={item.user_type}
          />
        );
      });
    return (
      <div className="usersList">
        <h2>Users List:</h2>
        <UserListMapped />
      </div>
    );
  }
};

export default UserDashboard;
