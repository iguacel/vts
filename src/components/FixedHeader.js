import React from "react";
import ScrollIndicator from "./ScrollIndicator";

const FixedHeader = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: "1000"
      }}
    >
      <ScrollIndicator height={6} color="white" />
    </div>
  );
};

export default FixedHeader;
