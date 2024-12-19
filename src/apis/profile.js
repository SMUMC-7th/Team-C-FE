import { axiosInstance } from './axiosInstance';

const postInitProfile = async ({
  profileImg,
  nickname,
  age,
  regions,
  keyword,
  majors,
  educations,
}) => {
  const { data } = await axiosInstance.post('/profiles/init-profile', {
    profileImg: profileImg,
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
  const { data } = await axiosInstance.get('/profiles/detail');
  return data;
};

const getProfileBookmarks = async ({ cursor, offset }) => {
  const { data } = await axiosInstance.get(
    `/profiles/bookmarks?cursor=${cursor}&offset=${offset}`
  );
  return data;
};

const getAlarm = async () => {
  const { data } = await axiosInstance.get(
    `https://api.youthstepup.site/profiles/alarm?cursor=29302402390319&offset=10`
  );
  return data;
};

const getEditProfile = async ({
  profileImg,
  nickname,
  age,
  regions,
  keyword,
  majors,
  educations,
}) => {
  const { data } = await axiosInstance.put('/profiles', {
    profileImg: profileImg,
    nickname: nickname,
    age: Number(age),
    regions: regions,
    keyword: keyword,
    majors: majors,
    educations: educations,
  });
  return data;
};

const deleteProfiles = async (nickName) => {
  const { data } = await axiosInstance.delete('/profiles', {
    nickName: nickName,
  });
  return data;
};

export {
  postInitProfile,
  getProfile,
  getProfileDetails,
  getProfileBookmarks,
  getAlarm,
  getEditProfile,
  deleteProfiles,
};
