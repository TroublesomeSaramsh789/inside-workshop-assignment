import React from "react";
// style
import "./RegisterForm.scss";

const RegisterForm = () => {
  const [UserName, setUserName] = React.useState<string>("");
  const [Phone, setPhone] = React.useState<string>("");
  const [Email, setEmail] = React.useState<string>("");
  const [Password, setPassword] = React.useState<string>("");
  const [UserType, setUserType] = React.useState<string>("");
  const [HidePass, setHidePass] = React.useState<boolean>(false);
  const [PassError, setPassError] = React.useState<boolean>(false);

  const HidePassChangeHandler = () => {
    setHidePass((e) => {
      return !e;
    });
  };

  const inputChangeHandler = (e: any, setState: any, defaultValue?: string | boolean) => {
    if (e.target.value) setState(e.target.value);
    else if (defaultValue) setState(defaultValue);
  };
  const formSubmitHandler = (e: any) => {
    e.preventDefault();
    console.log("Form Data:", { UserName, Phone, Email, Password, UserType });
  };

  return (
    <div className="form">
      <h2>Register Form</h2>
      <form onSubmit={formSubmitHandler}>
        <div className="form-input">
          <label htmlFor="name">Full Name:</label>
          <input
            type="Text"
            name="name"
            placeholder="Jon Doe"
            required
            onChange={(e) => inputChangeHandler(e, setUserName)}
          />
        </div>
        <div className="form-input">
          <label htmlFor="phone">Phone:</label>
          <input
            type="number"
            name="phone"
            placeholder="Jon Doe"
            required
            onChange={(e) => inputChangeHandler(e, setPhone)}
          />
        </div>
        <div className="form-input">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="jhondoe@mail.com"
            required
            onChange={(e) => inputChangeHandler(e, setEmail)}
          />
        </div>
        <div className="form-input">
          <label htmlFor="password">Password:</label>
          <input
            type={HidePass ? "text" : "password"}
            name="password"
            placeholder="user password"
            required
            onChange={(e) => inputChangeHandler(e, setPassword)}
          />
        </div>
        <div className="form-input">
          <label htmlFor="Re-Enter password">Re-Enter password:</label>
          <input
            type={HidePass ? "text" : "password"}
            name="Re-Enter password"
            placeholder="user password"
            required
            onChange={(e) =>
              e.target.value === Password
                ? setPassError(false)
                : setPassError(true)
            }
          />
          {PassError && <label className="warning-text">Wrong Password</label>}
        </div>

        <div className="form-input form-input-second">
          <input
            onChange={HidePassChangeHandler}
            type="checkbox"
            name="visibility"
          />
          <label htmlFor="visibility">Show Password</label>
        </div>
        <div className="form-input form-input">
          <label htmlFor="userType">Account Type:</label>
          <select
            required
            onChange={(e) => inputChangeHandler(e, setUserType, "User")}
            name="userType"
            defaultValue={"User"}
          >
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <div className="form-input">
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
