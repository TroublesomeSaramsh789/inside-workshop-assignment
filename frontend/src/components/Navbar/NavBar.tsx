import React from 'react'
import {NavLink} from "react-router-dom"
// style
import "./NavBar.scss"
const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <h3>Assignment</h3>
        </li>

        <li>
          <NavLink to="/" className={({ isActive }) => isActive && "active"}>
            <p>Login</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/register"
            className={({ isActive }) => isActive && "active"}
          >
            <p>Register</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => isActive && "active"}
          >
            <p>Dashboard</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar