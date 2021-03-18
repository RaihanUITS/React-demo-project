import React from "react";

const Like = ({ liked, clicked }) => {
  let classes = "fa fa-heart";
  if (!liked) classes += "-o";
  return (
    <i onClick={clicked} style={{ cursor: "pointer" }} className={classes}></i>
  );
};

export default Like;
