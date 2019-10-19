import React from "react";

const Footer = () => {
  return (
    <footer className="App-footer" style={{ marginBottom: "7em" }}>
      <a
        href="https://www.fulltable.com/CA/index.htm"
        target="_blank"
        rel="noopener noreferrer"
        title="index"
      >
        <h6 className="op6">
          <strong>
            A guide to Dr. Chris Mullen's The Visual Telling of Stories
          </strong>
        </h6>{" "}
      </a>

      <div
        className="footerFlex"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between"
        }}
      >
        <a
          className="up bold hug"
          href="http://www.fulltable.com//VTS/index2.htm"
          target="_blank"
          rel="noopener noreferrer"
          title="Galleries A to Z"
        >
          <h6>Galleries A to Z</h6>
        </a>
        <a
          className="up bold hug"
          href="http://www.fulltable.com/VTS/aoi/index.htm"
          target="_blank"
          rel="noopener noreferrer"
          title="Illustrators by name"
        >
          <h6>Illustrators by name</h6>
        </a>
        <a
          className="up bold hug"
          href="http://www.fulltable.com/VTS/aoi/index.htm"
          target="_blank"
          rel="noopener noreferrer"
          title="Contents A to Z"
        >
          <h6>Contents A to Z</h6>
        </a>
      </div>

      <a
        href="https://twitter.com/infoiguacel"
        target="_blank"
        rel="noopener noreferrer"
        title="index"
      >
        <h6 className="op6">
          <h6 className="hug op6">
            994 pages. Last scraped by <strong>@infoiguacel</strong>: 19 oct
            2019
          </h6>
        </h6>{" "}
      </a>
    </footer>
  );
};

export default Footer;
