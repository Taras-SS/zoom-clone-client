import React, { useEffect, useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Select,
} from "@material-ui/core";
import {
  Videocam as VideocamIcon,
  Security as SecurityIcon,
  PeopleAlt as ParticipantsIcon,
} from "@material-ui/icons";
import { getAllCameras } from "./webCameraConfig";
import { styles } from "./css/Styles";

interface IProp {
  showHideEndWindow: () => void;
}

export default ({ showHideEndWindow }: IProp) => {
  const [classes] = useState(styles());
  const [allCameras] = useState<Promise<MediaDeviceInfo[]>>(getAllCameras());

  useEffect(() => {}, []);

  return (
    <BottomNavigation showLabels={true}>
      <BottomNavigationAction label="Stop video" icon={<VideocamIcon />} />
      <BottomNavigationAction label="Security" icon={<SecurityIcon />} />
      {/* <BottomNavigationAction>
            <Select>
                {
                    allCameras.map((item:any) => (<option value={item.label}>{item.label}</option>))
                }
            </Select>
        </BottomNavigationAction>*/}
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
