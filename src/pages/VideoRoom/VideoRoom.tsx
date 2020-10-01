import React, { useEffect, useState, useRef } from "react";
import { getUSerCameraAndMicro, IPeerConnection } from "./WebRTC";
import { CircularProgress, Container } from "@material-ui/core";
import BottomPanel from "./BottomPanel";
import StopVideo from "./StopVideo";
import { socketsHandler } from "./socketsHandling/socketsGlobalEvents";
import { onNewUserToConnect } from "./socketsHandling/onNewUserConnecting";
import socketIoClient from "socket.io-client";
import { SERVER_URL } from "../../config";
import { User as IUser } from "../../models/user";
import { styles } from "./css/Styles";

interface IProp {
  meetingId: string;
}

export default ({ meetingId }: IProp) => {
  const videoElement = useRef<HTMLVideoElement | null>(null);
  const remoteVideo = useRef<HTMLVideoElement | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [
    stopMeetingVisibilityStatus,
    setStopMeetingVisibilityStatus,
  ] = useState<boolean>(false);
  const [classes] = useState(styles());
  const [socket] = useState(socketIoClient(SERVER_URL));
  const [activeUsers, setActiveUsers] = useState<IUser[]>([]);
  const [selectedCamera, setSelectedCamera] = useState<string | null>(null);

  const changeLoadingState = (): void => {
    setLoading((prevState) => !prevState);
  };

  const changeStopMeetingVisibilityStatus = (): void => {
    setStopMeetingVisibilityStatus((prevState) => !prevState);
  };

  const setIntialUsers = (users: IUser[]): void => {
    setActiveUsers([...users]);
  };

  const addNewUser = (user: IUser): void => {
    setActiveUsers((prevUsers) => {
      if (!prevUsers.find((item) => item._id === user._id)) {
        return [...prevUsers, user];
      }
      return prevUsers;
    });
  };

  useEffect(() => {
    getUSerCameraAndMicro(videoElement.current, changeLoadingState);
    socketsHandler(
      videoElement.current,
      remoteVideo.current,
      socket,
      meetingId,
      addNewUser,
      setIntialUsers
    );
    onNewUserToConnect(
      socket,
      remoteVideo.current,
      videoElement.current,
      meetingId
    );
    console.log(223);
    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <Container maxWidth="sm" className={classes.videoContainer}>
        <video autoPlay ref={videoElement} />
        <video autoPlay ref={remoteVideo} />
        <BottomPanel showHideEndWindow={changeStopMeetingVisibilityStatus} />
        {stopMeetingVisibilityStatus && <StopVideo />}
      </Container>
      {loading && (
        <div className={classes.loadarWrapper}>
          <CircularProgress />
        </div>
      )}
    </div>
  );
};
