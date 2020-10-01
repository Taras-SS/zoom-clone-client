import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import { styles } from "../styles/MainPageStyles";

export default () => {
  const [classes] = useState(styles());

  useEffect(() => {}, []);

  return (
    <div>
      <Button variant="contained" className={classes.primaryButton}>
        <div className={classes.iconWrapper}>
          <AddIcon className={classes.primaryBtnIcon} />
        </div>
      </Button>
      <span className={classes.buttonTitle}>Join</span>
    </div>
  );
};
