import React from "react";
import classnames from "classnames";

const Section = ({ children, right, left, middle }) => {
  const classNames = classnames("lib_section", { right, left, middle });
  return <div className={classNames}>{children}</div>;
};

export default Section;
