import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const getClass = ({ isActive }) => (isActive ? "active" : "");
  return (
    <nav>
      <NavLink to="/" className={getClass}>
        Home
      </NavLink>
      <NavLink to="/about" className={getClass}>
        About
      </NavLink>
      <NavLink to="/categories" className={getClass}>
        Categories
      </NavLink>
      <NavLink to="/register" className={getClass}>
        Register
      </NavLink>
    </nav>
  );
};
