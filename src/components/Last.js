import React from "react";

const Last = ({ data }) => {
  const { title, URL } = data;

  return (
    <div
      className="center"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "RGBA(244, 244, 244, 1)",
        height: "100px",
        padding: "0 1em",
        color: "black",
        zIndex: 1
      }}
    >
      <a
        href={`http://www.fulltable.com/${URL}`}
        target="_blank"
        rel="noopener noreferrer"
        title={title}
      >
        <div className="link rando">
          <h6>
            <strong>Last visited: </strong>
            {title}
          </h6>
        </div>
      </a>
    </div>
  );
};

export default Last;
