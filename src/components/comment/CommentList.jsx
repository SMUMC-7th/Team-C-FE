import * as S from './CommentList.style';
import EditMenu from '../editMenu/EditMenu';
import { deleteComment } from '../../apis/comment';

function CommentList({ comments, articleId }) {
  console.log(comments);

  const handleDeleteReply = async (replyId) => {
    console.log(replyId);
    try {
      await deleteComment({ replyId });
      alert('댓글이 삭제되었습니다.');
    } catch (error) {
      console.error('게시글 삭제 실패:', error);
      alert('댓글 삭제 중 오류가 발생했습니다.');
    }
  };

  // const handleEditReply = (replyId) => {
  // };

  return (
    <S.CommentList>
      {comments.map((comment) => (
        <S.CommentBox key={comment.replyId}>
          <img src={'https://bit.ly/4fhflX4'} alt={'사진'} />
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
            <p>{comment.content}</p>
          </S.Comment>
        </S.CommentBox>
      ))}
    </S.CommentList>
  );
}

export default CommentList;
