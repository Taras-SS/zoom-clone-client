import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import { getDay, getHour, getMinute, getMonth, getYear } from "./Date";
import { styles } from "../styles/MainPageStyles";

export default () => {
  const [classes] = useState(styles());

  useEffect(() => {}, []);

  return (
    <div className={classes.timeWrapper}>
      <Typography variant="h4" align="center" className={classes.typography}>
        {`${getHour()} : ${getMinute()}`}
      </Typography>
      <Typography variant="h6" align="center" className={classes.typography}>
        {`${getDay()} ${getMonth()} ${getYear()} р.`}
      </Typography>
    </div>
  );
};
