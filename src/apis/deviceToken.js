import { axiosInstance } from './axiosInstance';

const postDeviceToken = async (token) => {
  const { data } = await axiosInstance.post(`/auth/device-token`, {
    deviceToken: token,
  });
  return data;
};

export { postDeviceToken };
