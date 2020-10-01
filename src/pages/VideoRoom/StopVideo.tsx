import React, { useState, useEffect } from "react";
import { Box, Button } from "@material-ui/core";
import { styles } from "./css/Styles";

export default () => {
  const [classes] = useState(styles());

  useEffect(() => {}, []);

  return (
    <Box className={classes.endVideoWindow}>
      <Button variant="contained" className={classes.stopForAllBtn}>
        End meeting for all
      </Button>
      <Button variant="outlined" className={classes.leaveMeetingBtn}>
        Leave meeting
      </Button>
    </Box>
  );
};
