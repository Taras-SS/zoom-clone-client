import { RTC_CONFIG } from "../../../config";
import { IPeerConnection, peerUpdating } from "../WebRTC";
import { registerNewConnection } from "./socketsGlobalEvents";

export const onNewUserToConnect = (
  socket: any,
  remoteVideo: HTMLVideoElement | null,
  localVideo: HTMLVideoElement | null,
  meetingId: string
) => {
  const peerConnection = new RTCPeerConnection(RTC_CONFIG);

  peerConnection.ontrack = (event: RTCTrackEvent) => {
    if (!remoteVideo) {
      return;
    }
    [remoteVideo.srcObject] = event.streams;
    remoteVideo.onloadedmetadata = () => {
      remoteVideo.play();
    };
  };

  socket.on(
    "candidate-to-new-user",
    (mySocketId: string, candidate: RTCIceCandidate) => {
      peerConnection
        .addIceCandidate(new RTCIceCandidate(candidate))
        .catch((e: Error) => {
          throw new Error(e.message);
        });
    }
  );

  socket.on("offer-made", async ({ mySocketId, offer, from }: any) => {
    await peerConnection.setRemoteDescription(new RTCSessionDescription(offer));

    const answer = await peerConnection.createAnswer();
    await peerConnection.setLocalDescription(new RTCSessionDescription(answer));

    socket.emit("make-answer", {
      answer,
      to: from,
    });

    peerConnection.onicecandidate = (event: any) => {
      if (event.candidate) {
        socket.emit("candidate", from, event.candidate, mySocketId);
      }
    };
  });

  socket.on("get-video", (from: string) => {
    registerNewConnection(from, meetingId, socket, localVideo);
  });
};
