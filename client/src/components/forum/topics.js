import React from "react";
import { Link } from "react-router-dom";

const Topics = ({ topic }) => {
  return (
    <div>
      <Link to={`/forums/${topic}`}>{topic}</Link>
    </div>
  );
};

export default Topics;
