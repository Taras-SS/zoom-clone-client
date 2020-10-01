export const getAllCameras = async (): Promise<MediaDeviceInfo[]> => {
  const allDevices = await navigator.mediaDevices.enumerateDevices();
  return allDevices.filter((item) => item.kind === "videoinput");
};
