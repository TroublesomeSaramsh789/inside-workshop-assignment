import React from "react";
import { useNavigate } from "react-router-dom";
import {
  UserSelectionContext,
  userSelectionContextType,
} from "../../context/userSelection";
import "./User.scss";

interface userType {
  user_id: string;
  user_name: string;
  user_email: string;
  user_phone: string | number;
  user_type: string;
}
enum clickEventsTypeEnum {
  delete = "delete",
  edit = "edit",
}

const UserDetail = (props: userType) => {

  const navigate = useNavigate();
  const context: userSelectionContextType =
    React.useContext(UserSelectionContext);

  const ClickHandler = async (clickEventType: clickEventsTypeEnum) => {
    if (clickEventType === clickEventsTypeEnum.edit) {
      context.setLatestId(props.user_id);
      navigate("/update-user");
    }
  };
  return (
      <article className="user-detail">
          <h1>User Profile</h1>
      <div className="info">
        <h2 className="title">{props.user_name}</h2>
        {/* <p>User Id: {props.user_id}</p> */}
        <p>Email: {props.user_email}</p>
        <p>Phone: {props.user_phone}</p>
        <p>
          Type: <span className="highlight">{props.user_type} </span>
        </p>
      </div>
    </article>
  );
};

export default UserDetail;
