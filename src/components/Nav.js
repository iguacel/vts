import React from "react";
import useMedia from "../hooks/useMedia";

const Nav = ({ inputEl, onChange, query, clear, randomLink }) => {
  const artwork = useMedia(
    // Media queries
    ["(min-width: 0px) and (max-width: 580px)"],
    // Column counts (relates to above media queries by array index)
    ["mobile"],
    // Default column count
    "large"
  );

  return (
    <div
      style={{
        display: "flex",
        flexWrap: artwork === "mobile" ? "wrap" : "",
        alignItems: "center",
        justifyContent: "center",
        margin: "2em 0"
      }}
    >
      <input
        style={{ flexBasis: artwork === "mobile" ? "100%" : "50%" }}
        ref={inputEl}
        placeholder="Type to filter"
        onChange={onChange}
      />
      <button
        className={query ? "buttonClear" : "buttonCleared"}
        style={{
          flexBasis: artwork === "mobile" ? "50%" : "20%"
        }}
        onClick={() => clear()}
      >
        Clear
      </button>

      <button
        style={{ flexBasis: artwork === "mobile" ? "50%" : "30%" }}
        onClick={() => randomLink()}
      >
        Random
      </button>
    </div>
  );
};

export default Nav;
