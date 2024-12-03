import axios from 'axios';

const getSinglePolicy = async (srchPolicyId) => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/policy/recommend/${srchPolicyId}`
  );
  return data;
};

const getRecommendPolicy = async (page) => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/policy/recommend?display=10&pageIndex=${page}`,
    {
      withCredentials: true,
    }
  );
  return data;
};

const getRandomPolicy = async (page) => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/policy/recommend/random?display=10&pageIndex=${page}`
  );
  return data;
};

export { getSinglePolicy, getRandomPolicy, getRecommendPolicy };
