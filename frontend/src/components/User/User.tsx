import React from "react";
import { useNavigate  } from "react-router-dom";
import {
  UserSelectionContext,
  userSelectionContextType,
} from "../../context/userSelection";
import "./User.scss";
import { deleteUsersByID } from "./../../api/usersAPI";
import toast, { Toaster } from "react-hot-toast";

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

const User = (props: userType) => {
  const Deleted = () => toast.success("Deleted Successfully.");
  const DeletedFailed = () => toast.error("Delete Request Failed.");
  const navigate = useNavigate ();
  const context: userSelectionContextType =
    React.useContext(UserSelectionContext);

  const ClickHandler = async (clickEventType: clickEventsTypeEnum) => {
    
    if (clickEventType === clickEventsTypeEnum.delete) {
      context.userSelectedIdHandler(props.user_id);
      deleteUsersByID(props.user_id)
      .then((data) => {
        Deleted();
      })
      .catch((error) => {
        DeletedFailed();
      });
    } else if (clickEventType === clickEventsTypeEnum.edit) {
      context.setLatestId(props.user_id);
      navigate("/update-user");
    }
  };
  return (
    <article className="user">
      <div className="info">
        <h2 className="title">{props.user_name}</h2>
        {/* <p>User Id: {props.user_id}</p> */}
        <p>Email: {props.user_email}</p>
        <p>Phone: {props.user_phone}</p>
        <p>
          Type: <span className="highlight">{props.user_type} </span>
        </p>
      </div>
      <div className="controller">
        <button
          className="small delete"
          onClick={() => ClickHandler(clickEventsTypeEnum.delete)}
        >
          Delete
        </button>
        <button
          className="small edit"
          onClick={() => ClickHandler(clickEventsTypeEnum.edit)}
        >
          Edit
        </button>
      </div>
      <Toaster />
    </article>
  );
};

export default User;
