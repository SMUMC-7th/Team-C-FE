import { axiosInstance } from './axiosInstance';

const getSinglePolicy = async (srchPolicyId) => {
  const { data } = await axiosInstance.get(`/policy/recommend/${srchPolicyId}`);
  return data;
};

const getRecommendPolicy = async (page) => {
  const { data } = await axiosInstance.get(
    `/policy/recommend?display=10&pageIndex=${page}`
  );
  return data;
};

const getRandomPolicy = async (page) => {
  const { data } = await axiosInstance.get(
    `/policy/recommend/random?display=10&pageIndex=${page}`
  );
  return data;
};

export { getSinglePolicy, getRandomPolicy, getRecommendPolicy };
