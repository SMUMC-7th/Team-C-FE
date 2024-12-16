import axios from 'axios';

// 게시글 생성
const createPost = async (title, content) => {
  const res = await axios.post(
    `${import.meta.env.VITE_API_BASE_URL}/articles`,
    {
      title,
      content,
    },
    { withCredentials: true }
  );
  console.log(res);
  return res.data;
};

// 게시글 전체 조회
const getPostList = async ({ cursorId, pageSize }) => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/articles?cursorId=${cursorId}&pageSize=${pageSize}`,
    { withCredentials: true }
  );
  return data;
};

// 게시글 상세 조회
const getPostDetail = async ({ articleId }) => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/articles/${articleId}`,
    { withCredentials: true }
  );
  return data;
};

// 게시글 삭제
const deletePost = async ({ articleId }) => {
  const { data } = await axios.delete(
    `${import.meta.env.VITE_API_BASE_URL}/articles/${articleId}`,
    { withCredentials: true }
  );
  return data;
};

// 게시글 수정
const updatePost = async ({ articleId, title, content }) => {
  const { data } = await axios.put(
    `${import.meta.env.VITE_API_BASE_URL}/articles/${articleId}`,
    {
      title,
      content,
    },
    { withCredentials: true }
  );
  return data;
};

export { createPost, getPostList, getPostDetail, deletePost, updatePost };
