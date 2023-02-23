import React from "react";
import { NavLink, useParams, Outlet } from "react-router-dom";
import { getCategory } from "../api";

const Category = () => {
  const { catId } = useParams();
  const category = getCategory(catId);
  return (
    <>
      <h3>{category.name}</h3>
      <ul>
        {category.sessions.map((session) => (
          <li key={session.id}>
            <NavLink
              to={session.id}
              className={({ isActive }) => (isActive ? "active" : null)}
            >
              <p>{session.name}</p>
              <p>
                {session.speaker.name} | {session.speaker.org}
              </p>
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default Category;
