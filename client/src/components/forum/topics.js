import React from "react";
import { Link } from "react-router-dom";

const Topics = ({ topic }) => {
  return <Link to={`/forums/${topic}`}>{topic}</Link>;
};

export default Topics;
