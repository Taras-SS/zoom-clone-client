import React, { useState, useEffect } from "react";
import NewMeetingBtn from "./NewMeetingBtn";
import JoinMeetingBtn from "./JoinMeetingBtn";
import ScheduleBtn from "./ScheduleBtn";
import ShareScreenBtn from "./ShareScreenBtn";
import { styles } from "../styles/MainPageStyles";

export default function () {
  const [classes] = useState(styles());

  useEffect(() => {}, []);

  return (
    <div className={classes.buttonsContainer}>
      <div className={classes.twoButtonsWrapper}>
        <NewMeetingBtn />
        <JoinMeetingBtn />
      </div>
      <div className={classes.twoButtonsWrapper}>
        <ScheduleBtn />
        <ShareScreenBtn />
      </div>
    </div>
  );
}
