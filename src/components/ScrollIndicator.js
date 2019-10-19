import React from "react";
import usePercentageWindowScroll from "../hooks/usePercentageWindowScroll";

const ScrollIndicator = ({ height, color }) => {
  const { p } = usePercentageWindowScroll();

  return (
    <div
      style={{
        width: "100%",
        zIndex: "100"
      }}
    >
      <div
        style={{
          height: `${height}px`,
          width: `${p}%`,
          transition: "width 60ms",
          background: `${color}`
        }}
      />
    </div>
  );
};

export default ScrollIndicator;
