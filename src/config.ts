//export const SERVER_URL = "https://zoom-backend-by-taras-dyda.herokuapp.com";
export const SERVER_URL = "http://localhost:3030";

export const RTC_CONFIG = {
  iceServers: [
    {
      urls: ["stun:stun.l.google.com:19302"],
    },
  ],
};
