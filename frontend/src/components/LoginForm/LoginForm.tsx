import React from "react";
import {Link,useNavigate} from "react-router-dom"
import { loginUser } from "../../api/authAPI";
import {Toaster, toast} from "react-hot-toast"

const LoginForm = () => {
  const [user,setUser] = React.useState("User")
  const [Email, setEmail] = React.useState("");
  const [Password, setPassword] = React.useState("");
  const [HidePass, setHidePass] = React.useState(false);

  const navigate = useNavigate();

  // TOAST
  const UserLoginSuccess = () =>
    toast.success(`Welcome Back ${user}`);
  const UserLoginFailed = () => toast.error("Login Failed.");

  const HidePassChangeHandler = () => {
    setHidePass((e) => {
      return !e;
    });
  };

  const inputChangeHandler = (e: any, setState: any) => {
    setState(e.target.value);
  };
  const formSubmitHandler = (e: any) => {
    e.preventDefault();
    console.log("Form Data:", { name: Email, password: Password });
    loginUser(Email, Password)
      .then((data) => {
        console.log(data)
        localStorage.setItem("token", data.token);
        localStorage.setItem("id", data.id);
        setUser(data.user_name)
        UserLoginSuccess();
        navigate("/dashboard")
      })
      .catch((error) => {
        console.log(error);
        UserLoginFailed();
      });
  };

  return (
    <div className="form">
      <h2>Login Form</h2>
      <form onSubmit={formSubmitHandler}>
        <div className="form-input">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="User Email"
            required
            onChange={(e) => inputChangeHandler(e, setEmail)}
          />
        </div>
        <div className="form-input">
          <label htmlFor="password">Password:</label>
          <input
            type={HidePass ? "text" : "password"}
            name="password"
            placeholder="User Password"
            required
            onChange={(e) => inputChangeHandler(e, setPassword)}
          />
        </div>
        <div className="form-input form-input-second">
          <input
            onChange={HidePassChangeHandler}
            type="checkbox"
            name="visibility"
          />
          <label htmlFor="visibility">Show Password</label>
        </div>
        <div className="form-input">
          <input type="submit" value="Login" />
        </div>
        <div className="flex">
          <p>Don't Have An Account ?</p>
          <Link to={"/register"}>Register</Link>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default LoginForm;
