import React from "react";
import "./Background.sass";

const Background = ({ children }) => {
  return <div className="noisy-bg">{children}</div>;
};

export default Background;
