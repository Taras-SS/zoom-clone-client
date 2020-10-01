import { RTC_CONFIG } from "../../../config";
import {peerUpdating} from "../WebRTC";

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

  socket.on("candidate-to-new-user", (candidate: RTCIceCandidate) => {
    peerConnection
      .addIceCandidate(new RTCIceCandidate(candidate))
      .catch((e: Error) => {
        throw new Error(e.message);
      });
    /*if (localVideo !== null) {
      const stream = localVideo.srcObject as MediaStream;
      stream
          .getTracks()
          .forEach((track) => peerConnection.addTrack(track, stream));
    }
    peerUpdating(peerConnection, socket, meetingId, null);*/
  });

  /*socket.on("candidate-from-all-user", (candidate: RTCIceCandidate) => {
    peerConnection
        .addIceCandidate(new RTCIceCandidate(candidate))
        .catch((e: Error) => {
          throw new Error(e.message);
        });
    peerUpdating(peerConnection, socket, meetingId, null);
  });*/

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

  /*socket.on("answer-made-from-all-users", ({ answer }: any) => {
    peerConnection.setRemoteDescription(answer);
  });*/
};
