import { RTC_CONFIG } from "../../../config";
import { IPeerConnection, peerUpdating } from "../WebRTC";
import { User as IUser } from "../../../models/user";
import {string} from "yup";

export const socketsHandler = (
  videoElement: HTMLVideoElement | null,
  remoteVideo: HTMLVideoElement | null,
  socket: any,
  meetingId: string,
  addNewUser: Function,
  setIntialUsers: Function,
): void => {
  const userStr = localStorage.getItem("User") as string;
  const { _id, name, surName, imageUrl } = JSON.parse(userStr);

  let peerConnections: IPeerConnection = {};

  socket.emit("new-user-to-join", {
    userId: _id,
    name,
    surName,
    imageUrl,
    meetingId,
  });

  socket.on("to-new-user", (data: any) => {
    setIntialUsers(data.meeting.meeting.activeUsers);
  });

  socket.on("new-user-joined", (user: IUser) => {
    addNewUser(user);
    const peerConnection = new RTCPeerConnection(RTC_CONFIG);
    peerConnections[user.socketId] = peerConnection;
    if (videoElement !== null) {
      const stream = videoElement.srcObject as MediaStream;
      stream
        .getTracks()
        .forEach((track) => peerConnection.addTrack(track, stream));
    }
    peerUpdating(peerConnection, socket, meetingId, user.socketId);
  });

  socket.on("candidate", (socketId: string, candidate: RTCIceCandidate) => {
    peerConnections[socketId]
      .addIceCandidate(new RTCIceCandidate(candidate))
      .catch((e: Error) => {
        throw new Error(e.message);
      });
  });

  /*socket.on("candidate-to-all-users", (candidate: RTCIceCandidate, from: string) => {
    peerConnections[from]
        .addIceCandidate(new RTCIceCandidate(candidate))
        .catch((e: Error) => {
          throw new Error(e.message);
        });
  });*/

  /*socket.on("offer-made-to-all-users", async ({ mySocketId, offer, from }: any) => {
    console.log(offer);
    await peerConnections[from].setRemoteDescription(new RTCSessionDescription(offer));

    const answer = await peerConnections[from].createAnswer();
    await peerConnections[from].setLocalDescription(new RTCSessionDescription(answer));

    socket.emit("make-answer-from-all-users", {
      answer,
      to: from,
    });

    peerConnections[from].ontrack = (event: RTCTrackEvent) => {
      if (!remoteVideo) {
        return;
      }
      [remoteVideo.srcObject] = event.streams;
      remoteVideo.onloadedmetadata = () => {
        remoteVideo.play();
      };
    };

    peerConnections[from].onicecandidate = (event: any) => {
      if (event.candidate) {
        socket.emit("candidate-from-all-users", from, event.candidate);
      }
    };
  });*/

  socket.on("answer-made", ({ from, answer }: any) => {
    peerConnections[from].setRemoteDescription(answer);
  });
};
