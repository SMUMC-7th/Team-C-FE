import * as S from './CommentList.style';
import EditMenu from '../editMenu/EditMenu';

function CommentList({ comments, articleId }) {
  console.log(comments);
  return (
    <S.CommentList>
      {comments.map((comment, index) => (
        <S.CommentBox key={index}>
          <img src={'https://bit.ly/4fhflX4'} alt={'사진'} />
          <S.Comment>
            <S.EditBox>
              <h6>{comment.nickName}</h6>
              <EditMenu />
            </S.EditBox>
            <p>{comment.content}</p>
          </S.Comment>
        </S.CommentBox>
      ))}
    </S.CommentList>
  );
}

export default CommentList;
