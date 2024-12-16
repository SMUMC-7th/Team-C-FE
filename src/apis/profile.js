import { axiosInstance } from './axiosInstance';

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

const getProfile = async () => {
  const { data } = await axiosInstance.get('/profiles');
  return data;
};

const getProfileDetails = async () => {
  const { data } = await axiosInstance.get('/profiles/details');
  return data;
};

const getProfileBookmarks = async ({ cursor, offset }) => {
  const { data } = await axiosInstance.get(
    `/profiles/bookmarks?cursor=${cursor}&offset=${offset}`
  );
  return data;
};

const getAlarm = async ({ cursor, offset }) => {
  const { data } = await axiosInstance.get(
    `https://api.youthstepup.site/profiles/alarm?cursor=${cursor}&offset=${offset}`
  );
  return data;
};

export {
  postInitProfile,
  getProfile,
  getProfileDetails,
  getProfileBookmarks,
  getAlarm,
};
