import React from 'react'
import {NavLink} from "react-router-dom"
// style
import "./NavBar.scss"
import { AuthContext } from './../../context/authContext';
const NavBar = () => {
  const AuthData = React.useContext(AuthContext);

  return (
    <nav className="navbar">
      <ul>
        <li>
          <h3>Assignment</h3>
        </li>

        <li>
          <NavLink to="/">
            <p>Login</p>
          </NavLink>
        </li>
        {AuthData.id && AuthData.token && <li>
          <NavLink
            to="/dashboard"
          >
            <p>Dashboard</p>
          </NavLink>
        </li>}
      </ul>
    </nav>
  );
}

export default NavBar