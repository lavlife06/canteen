import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const TopicDetails = ({ match }) => {
  // return <div>{match.params.topics}</div>;

  const [allQandA, setallQandA] = useState([
    {
      id: "abc123",
      topic: match.params.topics,
      que: `why ${match.params.topics} seems so hard?`,
      repliescount: 3,
      upvotes: 10,
    },
    {
      id: "abc124",
      topic: match.params.topics,
      que: `who made ${match.params.topics} so hard?`,
      repliescount: 3,
      upvotes: 10,
    },
    {
      id: "abc125",
      topic: match.params.topics,
      que: `why should one learn ${match.params.topics}?`,
      repliescount: 3,
      upvotes: 10,
    },
  ]);

  return (
    <Fragment>
      <div className="">
        {allQandA.map((item) => (
          <Link to={`/forums/${item.topic}/${item.id}`}>
            <Fragment>
              <h2>topic:{item.topic}</h2>
              <h4>Q:{item.que}</h4>
              <p>upvotes:{item.upvotes}</p>
              <strong>replies:{item.repliescount}</strong>
            </Fragment>
          </Link>
        ))}
      </div>
    </Fragment>
  );
};

export default TopicDetails;
