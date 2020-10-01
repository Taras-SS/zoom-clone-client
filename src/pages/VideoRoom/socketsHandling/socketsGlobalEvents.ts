import { RTC_CONFIG } from "../../../config";
import { IPeerConnection, peerUpdating } from "../WebRTC";
import { User as IUser } from "../../../models/user";

let peerConnections: IPeerConnection = {};

export const registerNewConnection = (
  userSocketId: string,
  meetingId: string,
  socket: any,
  videoElement: HTMLVideoElement | null
) => {
  const peerConnection = new RTCPeerConnection(RTC_CONFIG);
  peerConnections[userSocketId] = peerConnection;
  if (videoElement !== null) {
    const stream = videoElement.srcObject as MediaStream;
    stream
      .getTracks()
      .forEach((track) => peerConnection.addTrack(track, stream));
  }
  peerUpdating(peerConnection, socket, meetingId, userSocketId);
};

export const socketsHandler = (
  videoElement: HTMLVideoElement | null,
  remoteVideo: HTMLVideoElement | null,
  socket: any,
  meetingId: string,
  addNewUser: Function,
  setIntialUsers: Function
): void => {
  const userStr = localStorage.getItem("User") as string;
  const { _id, name, surName, imageUrl } = JSON.parse(userStr);

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
    registerNewConnection(user.socketId, meetingId, socket, videoElement);
    /*const peerConnection = new RTCPeerConnection(RTC_CONFIG);
    peerConnections[user.socketId] = peerConnection;
    if (videoElement !== null) {
      const stream = videoElement.srcObject as MediaStream;
      stream
        .getTracks()
        .forEach((track) => peerConnection.addTrack(track, stream));
    }
    peerUpdating(peerConnection, socket, meetingId, user.socketId);*/
    socket.emit("get-video-from-new-user", { to: user.socketId });
  });

  socket.on("candidate", (socketId: string, candidate: RTCIceCandidate) => {
    peerConnections[socketId]
      .addIceCandidate(new RTCIceCandidate(candidate))
      .catch((e: Error) => {
        throw new Error(e.message);
      });
  });

  socket.on("answer-made", ({ from, answer }: any) => {
    peerConnections[from].setRemoteDescription(answer);
  });
};
