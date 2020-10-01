export interface IPeerConnection {
  [key: string]: any;
}

export const getUSerCameraAndMicro = (
  videoElement: HTMLVideoElement | null,
  changeLoadingState: Function
) => {
  navigator.getUserMedia(
    { video: true, audio: true },
    (stream) => {
      videoElement !== null && (videoElement.srcObject = stream);
      changeLoadingState();
    },
    (error: any) => {
      throw new Error(error.message);
    }
  );
};

export const peerUpdating = (
  peerConnection: RTCPeerConnection,
  socket: any,
  meetingId: string,
  userSocketId: string | null
) => {
  const newPeerConnection = peerConnection;
  newPeerConnection.onicecandidate = (event: any) => {
    if (event.candidate) {
      userSocketId !== null
        ? socket.emit("candidate-to-new-user", userSocketId, event.candidate)
        : socket.emit("candidate-to-all-users", meetingId, event.candidate);
    }
  };

  newPeerConnection
    .createOffer()
    .then((sdp: RTCSessionDescriptionInit) => {
      peerConnection.setLocalDescription(sdp);
    })
    .then(() => {
      userSocketId !== null
        ? socket.emit("make-offer", {
            offer: peerConnection.localDescription,
            to: userSocketId,
          })
        : socket.emit("make-offer-to-all-users", {offer: peerConnection.localDescription, to: meetingId});
    });
};
