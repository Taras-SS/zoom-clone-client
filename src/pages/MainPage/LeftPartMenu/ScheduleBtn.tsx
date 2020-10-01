import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { AlarmAdd as ScheduleIcon } from "@material-ui/icons";
import { styles } from "../styles/MainPageStyles";

export default () => {
  const [classes] = useState(styles());

  useEffect(() => {}, []);

  return (
    <div>
      <Button variant="contained" className={classes.primaryButton}>
        <div className={classes.iconWrapper}>
          <ScheduleIcon className={classes.primaryBtnIcon} />
        </div>
      </Button>
      <span className={classes.buttonTitle}>Schedule</span>
    </div>
  );
};
