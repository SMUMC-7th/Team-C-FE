import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from './axiosInstance';

const getKakaoOAuth = async (code) => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/auth/kakao-oauth?code=${code}`;

  const { data } = await axiosInstance.get(url);
  return data;
};

const postInitProfile = async ({
  nickname,
  age,
  regions,
  keyword,
  majors,
  educations,
}) => {
  const { data } = await axiosInstance.post('/profiles/init-profile', {
    nickname: nickname,
    age: Number(age),
    regions: regions,
    keyword: keyword,
    majors: majors,
    educations: educations,
  });
  return data;
};

export { getKakaoOAuth, postInitProfile };
