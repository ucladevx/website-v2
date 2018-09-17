import React from "react";
import classnames from "classnames";

const Pill = ({ children }) => {
  return React.Children.map(children, c => <div className="lib_pill">{c}</div>);
};

export default Pill;
