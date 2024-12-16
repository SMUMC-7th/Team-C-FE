import { axiosInstance } from './axiosInstance';

// 댓글 조회
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

// 댓글 삭제
export const deleteComment = async ({ replyId }) => {
  const { data } = await axiosInstance.delete(`/replies/${replyId}`);
  return data;
};

// 댓글 수정
export const updateComment = async ({ replyId, content }) => {
  const { data } = await axiosInstance.put(`/replies/${replyId}`, {
    content,
  });
  return data;
};
