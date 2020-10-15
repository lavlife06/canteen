import React from "react";

const TopicDetails = ({ match }) => {
  return <div>{match.params.topics}</div>;
};

export default TopicDetails;
