import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const SelectedTopicDetails = () => {
  const [replies, setReplies] = useState([
    {
      id: "cab126",
      topic: "history",
      que: "why history seems so hard?",
      upvotes: 15,
      ans: "are hum haina sikha denge",
    },
    {
      id: "cab127",
      topic: "history",
      que: "why history seems so hard?",
      upvotes: 15,
      ans: "its easy just love history and the rest is history",
    },
  ]);

  return (
    <Fragment>
      <div className="">
        {replies.map((item) => (
          <Link to={`/forums/${item.topic}/${item.id}`}>
            <Fragment>
              <h2>topic:{item.topic}</h2>
              <h4>Q:{item.que}</h4>
              <p>A:{item.ans}</p>
              <strong>upvotes:{item.upvotes}</strong>
            </Fragment>
          </Link>
        ))}
      </div>
    </Fragment>
  );
};

export default SelectedTopicDetails;
// Isme file mai hum comment wala integrate kar sakte
