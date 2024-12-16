import * as S from './CommentList.style';
import EditMenu from '../editMenu/EditMenu';

function CommentList({ comments }) {
  return (
    <S.CommentList>
      {comments.map((comment, index) => (
        <S.CommentBox key={index}>
          <img src={'https://bit.ly/4fhflX4'} alt={'사진'} />
          <S.Comment>
            <S.EditBox>
              <h6>유니</h6>
              <EditMenu />
            </S.EditBox>
            <p>{comment}</p>
          </S.Comment>
        </S.CommentBox>
      ))}
    </S.CommentList>
  );
}

export default CommentList;
