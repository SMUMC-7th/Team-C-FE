import { axiosInstance } from './axiosInstance';
import { generateToken } from '../remote/firebase';
import { useQuery } from '@tanstack/react-query';

const postDeviceToken = async (token) => {
  const { data } = await axiosInstance.post(`/auth/device-token`, {
    deviceToken: token,
  });
  return data;
};

const useDeviceToken = (enabled) => {
  return useQuery({
    queryKey: ['deviceToken'],
    queryFn: async () => {
      if (
        typeof window !== 'undefined' &&
        'Notification' in window &&
        'serviceWorker' in navigator
      ) {
        const token = await generateToken();
        if (token) {
          console.log(token);
          return postDeviceToken(token);
        }
        throw new Error('푸시 알림 토큰 생성 실패');
      } else {
        console.warn('알림 또는 서비스 워커를 지원하지 않는 브라우저입니다.');
        return null;
      }
    },
    enabled: enabled,
  });
};

export { postDeviceToken, useDeviceToken };
