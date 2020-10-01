import React, { useState, useEffect } from "react";
import { styles } from "./css/Styles";

export default () => {
  const [classes] = useState(styles());

  useEffect(() => {}, []);

  return (
    <div className={classes.deviderWrapper}>
      <div className={classes.deviderBorder}></div>
      <span className={classes.deviderText}>or</span>
      <div className={classes.deviderBorder}></div>
    </div>
  );
};
