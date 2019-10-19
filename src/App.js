import React, { useState, useEffect, useRef } from "react";
import Fuse from "fuse.js";
import { csv } from "d3";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Sharer from "./components/Sharer";
import Links from "./components/Links";
import Footer from "./components/Footer";
import Last from "./components/Last";
import Scroll from "./components/Scroll";
import FixedHeader from "./components/FixedHeader";

import vts from "./data/vts.csv";

const fuseOptions = {
  shouldSort: true,
  threshold: 0.4,
  location: 0,
  distance: 1000,
  maxPatternLength: 12,
  minMatchCharLength: 3,
  keys: ["title"]
};

function App() {
  const [data, setData] = useState(null);
  const [last, setLast] = useState(null);
  const [query, setQuery] = useState(null);
  const inputEl = useRef(null);

  useEffect(() => {
    csv(vts).then(data => {
      setData(data);
    });
  }, []);

  const openInNewTab = url => {
    var win = window.open(url, "_blank");
    win.focus();
  };

  const randomLink = () => {
    const item = data[Math.floor(Math.random() * data.length)];
    openInNewTab(`http://www.fulltable.com/${item.URL}`);
    setLast(item);
  };

  const onChange = e => {
    const { target = {} } = e;
    const { value = "" } = target;
    setQuery(value);
  };

  const clear = () => {
    setQuery("");
    inputEl.current.value = "";
  };

  const fuse = new Fuse(data, fuseOptions);
  const finalData = query ? fuse.search(query) : data;

  return (
    <div id="inicio" className="App max">
      <FixedHeader />
      <Header />
      <Nav
        inputEl={inputEl}
        onChange={onChange}
        query={query}
        clear={clear}
        randomLink={randomLink}
      />
      <Scroll />

      {last && <Last data={last} />}

      {finalData &&
        finalData.map((x, i) => (
          <div
            key={`link${x.title.substring(0, 2)}${i}`}
            onClick={() => setLast(x)}
          >
            <Links data={x} />
          </div>
        ))}
      <Sharer />

      <Footer />
    </div>
  );
}

export default App;
