import React from "react";

import classes from "./index.module.css";

const Card = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};

export default Card;

