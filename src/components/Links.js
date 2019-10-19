import React from "react";

function Links({ data }) {
  const { title, URL } = data;

  return (
    <a
      href={`http://www.fulltable.com/${URL}`}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
    >
      <div className="link links linkBullet">{title}</div>
    </a>
  );
}

export default Links;
