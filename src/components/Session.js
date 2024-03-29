import React from "react";
import { useParams } from "react-router-dom";
import { getSession } from "../api";

const Session = () => {
  const { catId, sessionId } = useParams();
  const { name, desc, speaker } = getSession({ catId, sessionId });
  return (
    <>
      <h3>{name}</h3>
      <p>{desc}</p>
      <h4>{speaker.name}</h4>
      <span>
        {speaker.title} at {speaker.org}
      </span>
      <p>{speaker.bio}</p>
    </>
  );
};

export default Session;
