import React from "react";

function Message() {
  return (
    <div className="no-more-cocktails">
      <h4>
        {" "}
        Your search did not match any
        <span className="d"> d</span>
        <span className="r">r</span>
        <span className="i">i</span>
        <span className="n">n</span>
        <span className="k">k</span>...
      </h4>
    </div>
  );
}

export default Message;
