import React from "react";

const Header = () => {
  return (
    <header className="App-header" style={{ marginTop: "3em" }}>
      <p>A guide to Dr. Chris Mullen's</p>

      <h1 className="xlarge hug1">
        <a
          href="https://www.fulltable.com/CA/index.htm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>The Visual Telling of Stories</strong>
        </a>
      </h1>
    </header>
  );
};

export default Header;
