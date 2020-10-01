import axios from "axios";
import { SERVER_URL } from "../config";

interface INewMeeting {
  authorId: string;
  status: "live" | "global" | "planned";
}

interface ICheckMeeting {
  hash: string;
}

export const createNewMeeting = (meetingData: INewMeeting) => {
  return axios.post(`${SERVER_URL}/api/newMeeting`, meetingData);
};

export const checkForMeeting = (meetingData: ICheckMeeting) => {
  return axios.post(`${SERVER_URL}/api/checkMeetingByHash`, meetingData);
};
