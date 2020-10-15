import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Topics from "./topics";

const Forum = () => {
  const [topics, setTopics] = useState([
    "physics",
    "maths",
    "chemistry",
    "history",
  ]);

  return (
    <Fragment>
      <h1 className="large text-primary">Forum</h1>
      <div className="large text-primary">
        {topics.map((topic) => (
          <Topics topic={topic} />
        ))}
      </div>
    </Fragment>
  );
};
export default Forum;
