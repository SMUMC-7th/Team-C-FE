import * as S from './CommentList.style';
import EditMenu from '../editMenu/EditMenu';
import { deleteComment, updateComment } from '../../apis/comment';
import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import useStore from '../../store/store';

function CommentList({ comments, articleId, setComments }) {
  console.log(comments);
  const [editingReplyId, setEditingReplyId] = useState(null);
  const [newContent, setNewContent] = useState('');
  const { commentCount, setCommentCount } = useStore();

  // 댓글 삭제
  const handleDeleteReply = async (replyId) => {
    console.log(replyId);
    try {
      await deleteComment({ replyId });
      setComments((prevComments) =>
        prevComments.filter((comment) => comment.replyId !== replyId)
      );
      setCommentCount(commentCount - 1);
    } catch (error) {
      console.error('댓글 삭제 실패:', error);
      alert('댓글 삭제 중 오류가 발생했습니다.');
    }
  };

  // 댓글 수정
  const handleEditReply = (replyId, currentContent) => {
    setEditingReplyId(replyId);
    setNewContent(currentContent);
  };

  const handleSaveEdit = async () => {
    if (newContent.trim()) {
      try {
        await updateComment({ replyId: editingReplyId, content: newContent });
        setComments((prevComments) =>
          prevComments.map((comment) =>
            comment.replyId === editingReplyId
              ? { ...comment, content: newContent }
              : comment
          )
        );
        setEditingReplyId(null);
        setNewContent('');
      } catch (error) {
        console.error('댓글 수정 실패:', error);
        alert('댓글 수정 중 오류가 발생했습니다.');
      }
    } else {
      alert('내용을 입력해 주세요.');
    }
  };

  return (
    <S.CommentList>
      {comments.map((comment) => (
        <S.CommentBox key={comment.replyId}>
          {/* <img src={}} alt={'사진'} /> */}
          <S.Comment>
            <S.EditBox>
              <h6>{comment.nickName}</h6>
              <S.Edit>
                <S.CommentIcon />
                <EditMenu
                  onEdit={() => handleEditReply(comment.replyId)}
                  onDelete={() => handleDeleteReply(comment.replyId)}
                />
              </S.Edit>
            </S.EditBox>
            {editingReplyId === comment.replyId ? (
              <S.CommentUpdate>
                <input
                  value={newContent || ''}
                  onChange={(e) => setNewContent(e.target.value)}
                />
                <button onClick={handleSaveEdit}>
                  <FaCheckCircle />
                </button>
              </S.CommentUpdate>
            ) : (
              <p>{comment.content}</p>
            )}
          </S.Comment>
        </S.CommentBox>
      ))}
    </S.CommentList>
  );
}

export default CommentList;
