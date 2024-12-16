import * as S from './CommentInput.style';
import { LuSendHorizonal } from 'react-icons/lu';

function CommentInput({ newComment, setNewComment, handleAddComment }) {
  return (
    <S.CommentInputBox>
      <S.CommentInput>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="댓글을 입력하세요"
        />
        <LuSendHorizonal onClick={handleAddComment} />
      </S.CommentInput>
    </S.CommentInputBox>
  );
}

export default CommentInput;
