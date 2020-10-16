import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Topics from "./topics";

const Forum = ({ match }) => {
  const [topics, setTopics] = useState([
    "physics",
    "maths",
    "chemistry",
    "history",
  ]);

  const [recentQandA, setrecentqanda] = useState([
    {
      id: "abc123",
      topic: "maths",
      que: "why maths seems so hard?",
      repliescount: 3,
      upvotes: 10,
    },
    {
      id: "abc124",
      topic: "physics",
      que: "why physics seems so hard?",
      repliescount: 3,
      upvotes: 10,
    },
    {
      id: "abc125",
      topic: "history",
      que: "why history seems so hard?",
      repliescount: 3,
      upvotes: 10,
    },
  ]);

  return (
    <Fragment>
      <h1 className="">Forum</h1>
      <div style={{ display: "flex" }}>
        <div className="" style={{ flexDirection: "column" }}>
          {topics.map((topic) => (
            <Topics topic={topic} />
          ))}
        </div>
        <div className="" style={{ flex: 1 }}>
          <h1>Recently Asked Q&A</h1>
          <div className="">
            {recentQandA.map((item) => (
              <Link to={`/forums/${item.topic}/${item.id}`}>
                <Fragment>
                  <h2>topic:{item.topic}</h2>
                  <h3>Q:{item.que}</h3>
                  <strong>upvotes:{item.upvotes}</strong>
                  <strong>replies:{item.repliescount}</strong>
                </Fragment>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Forum;
