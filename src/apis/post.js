import axios from 'axios';

const createPost = async (title, content) => {
  const res = await axios.post(
    `${import.meta.env.VITE_API_BASE_URL}/articles`,
    {
      title,
      content,
    }
  );
  console.log(res);
  return res.data;
};

const getPostList = async () => {
  const { data } = await axios.get(
    `https://api.youthstepup.site/articles?cursorId=null&pageSize=10`
  );
  return data;
};

export { createPost, getPostList };
