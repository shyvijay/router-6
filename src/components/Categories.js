import { Outlet, NavLink } from "react-router-dom";
import { getCategories } from "../api";

export default function Categories() {
  const categories = getCategories();
  return (
    <div className="container mt-4">
      <h1>Session Categories</h1>

      <ul
        style={{
          height: 140,
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          paddingLeft: 0,
        }}
      >
        {categories.map((cat) => (
          <li
            key={cat.id}
            style={{
              listStyle: "none",
              padding: "5px 0 5px 10px",
              border: "1px solid #f0f0f0 ",
            }}
          >
            <NavLink
              className={({ isActive }) => (isActive ? "active" : null)}
              to={cat.id}
            >
              {cat.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
