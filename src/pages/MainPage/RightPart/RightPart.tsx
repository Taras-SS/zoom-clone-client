import React, { useState } from "react";
import { Container } from "@material-ui/core";
import ImageAndDate from "./ImageAndDate";
import { Typography } from "@material-ui/core";
import { styles } from "../styles/MainPageStyles";

export default () => {
  const [classes] = useState(styles());

  return (
    <Container className={classes.rightPartContainer}>
      <ImageAndDate />
      <Typography align="center" className={classes.noUpcomingMeetings}>
        No upcoming meetings today
      </Typography>
    </Container>
  );
};
