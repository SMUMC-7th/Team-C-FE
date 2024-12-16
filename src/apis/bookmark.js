import axios from 'axios';
import { axiosInstance } from './axiosInstance';

const requestBookmark = async (bookmarkData) => {
  const { data } = await axiosInstance.post(
    `/policy/bookmark/request`,
    bookmarkData
  );
  return data;
};

const getMonthBookmark = async (year, month) => {
  const { data } = await axiosInstance.get(
    `/users/policies/month?year=${year}&month=${month}`
  );
  return data;
};

const getDayBookmark = async (year, month, day) => {
  const { data } = await axiosInstance.get(
    `/users/policies/date?year=${year}&month=${month}&date=${day}`
  );
  return data;
};

const completeBookmark = async (bookmarkId, isCompleted) => {
  const { data } = await axiosInstance.patch(`/users/policies/is-complete`, {
    bookmarkId: bookmarkId,
    isCompleted: isCompleted,
  });

  return data;
};

const isBookmarked = async (bookmarkId) => {
  const { data } = await axiosInstance.get(
    `/policy/bookmark/exist-check/${bookmarkId}`
  );

  return data;
};

const deleteBookmark = async (bookmarkId) => {
  const { data } = await axiosInstance.delete(
    `/profiles/bookmarks/${bookmarkId}`
  );
  return data;
};

export {
  requestBookmark,
  getMonthBookmark,
  getDayBookmark,
  completeBookmark,
  isBookmarked,
  deleteBookmark,
};
