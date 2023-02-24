import React from "react";
import { NavLink, useParams, Outlet } from "react-router-dom";
import { getCategory } from "../api";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Category = () => {
  const { catId } = useParams();
  const category = getCategory(catId);
  return (
    <>
      <h3>{category.name}</h3>
      <hr></hr>
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          paddingLeft: 0,
        }}
      >
        {category.sessions.map((session) => (
          <li
            key={session.id}
            style={{ flex: 3, listStyle: "none", margin: "0 5px" }}
          >
            <Card style={{ width: 300, height: 200 }}>
              <Card.Body>
                <Card.Title>{session.name}</Card.Title>
                <Card.Text>
                  {session.speaker.name} | {session.speaker.org}
                </Card.Text>
                <NavLink
                  to={session.id}
                  className={({ isActive }) => (isActive ? "active" : null)}
                >
                  <Button variant="primary">Read more</Button>
                </NavLink>
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default Category;
