import React, { useEffect, useState } from "react";
import { checkForMeeting } from "../../api/meetings";
import VideoRoom from "./VideoRoom";
import { CircularProgress } from "@material-ui/core";
import { styles } from "./css/Styles";

export default ({ match: { params } }: any) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [meetingId, setMeetingId] = useState<string>("");
  const [classes] = useState(styles());

  const handleCheck = async () => {
    const response = await checkForMeeting({ hash: params.id });
    if (response && response.status === 200) {
      setMeetingId(response.data.meeting._id);
      setLoading(false);
    }
  };

  useEffect(() => {
    handleCheck();
  }, []);

  return (
    <div>
      {loading ? (
        <div className={classes.loadarWrapper}>
          <CircularProgress />
        </div>
      ) : (
        <VideoRoom meetingId={meetingId} />
      )}
    </div>
  );
};
