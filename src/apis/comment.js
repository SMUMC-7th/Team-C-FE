import { axiosInstance } from './axiosInstance';

export const getComments = async ({ articleId, cursorId, pageSize }) => {
  try {
    const response = await axiosInstance.get(`/replies/articles/${articleId}`, {
      params: {
        cursorId,
        pageSize,
      },
    });
    return response.data;
  } catch (error) {
    console.error('댓글 조회 실패:', error);
    throw error;
  }
};
