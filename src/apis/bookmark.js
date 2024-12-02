import axios from 'axios';

const requestBookmark = async (bookmarkData) => {
  const { data } = await axios.post(
    `${import.meta.env.VITE_API_BASE_URL}/policy/bookmark/request`,
    bookmarkData,
    {
      withCredentials: true,
    }
  );
  return data;
};

const getMonthBookmark = async (year, month) => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/users/policies/month?year=${year}&month=${month}`,
    {
      withCredentials: true,
    }
  );
  return data;
};

const getDayBookmark = async (year, month, day) => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/users/policies/date?year=${year}&month=${month}&date=${day}`,
    {
      withCredentials: true,
    }
  );
  return data;
};

const completeBookmark = async (bookmarkId, isCompleted) => {
  const { data } = await axios.patch(
    `${import.meta.env.VITE_API_BASE_URL}/users/policies/is-complete`,
    {
      bookmarkId: bookmarkId,
      isCompleted: isCompleted,
    },
    {
      withCredentials: true,
    }
  );

  return data;
};

export { requestBookmark, getMonthBookmark, getDayBookmark, completeBookmark };
