import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { Videocam as VideocamIcon } from "@material-ui/icons";
import { createNewMeeting } from "../../../api/meetings";
import { useHistory } from "react-router-dom";
import { styles } from "../styles/MainPageStyles";

export default () => {
  const [classes] = useState(styles());
  const history = useHistory();

  useEffect(() => {}, []);

  const handleClick = async () => {
    const userStr = localStorage.getItem("User") as string;
    const { _id } = JSON.parse(userStr);

    const response = await createNewMeeting({
      status: "live",
      authorId: _id,
    });
    response &&
      response.status === 201 &&
      history.push(`/meeting/${response.data.meeting.hash}`);
  };

  return (
    <div>
      <Button
        variant="contained"
        className={classes.newMeetingBtn}
        onClick={handleClick}
      >
        <VideocamIcon className={classes.icons} />
      </Button>
      <span className={classes.buttonTitle}>New Meeting</span>
    </div>
  );
};
