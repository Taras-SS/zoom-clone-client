import React, { useEffect, useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Button,
} from "@material-ui/core";
import {
  Videocam as VideocamIcon,
  Security as SecurityIcon,
  PeopleAlt as ParticipantsIcon,
} from "@material-ui/icons";
import { styles } from "./css/Styles";

interface IProp {
  showHideEndWindow: () => void;
}

export default ({ showHideEndWindow }: IProp) => {
  const [classes] = useState(styles());

  useEffect(() => {}, []);

  return (
    <BottomNavigation showLabels={true}>
      <BottomNavigationAction label="Stop video" icon={<VideocamIcon />} />
      <BottomNavigationAction label="Security" icon={<SecurityIcon />} />
      <BottomNavigationAction
        label="Participants"
        icon={<ParticipantsIcon />}
      />
      <Button
        variant="contained"
        className={classes.stopVideoBtn}
        onClick={showHideEndWindow}
      >
        End
      </Button>
    </BottomNavigation>
  );
};
