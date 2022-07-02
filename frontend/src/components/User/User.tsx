import React from 'react'
import "./User.scss";

interface userType {
    user_name: string, user_email: string,user_phone: string | number, user_type: string
}
const User = (props:userType) => {
  return (
    <article className="user">
      <h2>Name:{props.user_name}</h2>
      <p>Email:{props.user_email}</p>
      <p>Phone:{props.user_phone}</p>
      <p>Type:{props.user_type.toUpperCase()}</p>
    </article>
  );
}

export default User