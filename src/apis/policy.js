import axios from 'axios';

const getSinglePolicy = async (srchPolicyId) => {
  const { data } = await axios.get(
    `https://api.youthstepup.site/policy/recommend/${srchPolicyId}`
  );
  return data;
};

const getRecommendPolicy = async (page) => {
  const { data } = await axios.get(
    `https://api.youthstepup.site/policy/recommend?display=10&pageIndex=${page}`
  );
  return data;
};

const getRandomPolicy = async (page) => {
  const { data } = await axios.get(
    `https://api.youthstepup.site/policy/recommend/random?display=10&pageIndex=${page}`
  );
  return data;
};

export { getSinglePolicy, getRandomPolicy, getRecommendPolicy };
