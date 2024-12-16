import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from './axiosInstance';

const getKakaoOAuth = async (code) => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/auth/kakao-oauth?code=${code}`;

  const { data } = await axiosInstance.get(url);
  return data;
};

const getNaverOAuth = async (code) => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/auth/naver-oauth?state=youteStepup&code=${code}`;

  const { data } = await axiosInstance.get(url);
  return data;
};

const getGoogleOAuth = async (code) => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/auth/google-oauth?code=${code}`;

  const { data } = await axiosInstance.get(url);
  return data;
};

export { getKakaoOAuth, getNaverOAuth, getGoogleOAuth };
