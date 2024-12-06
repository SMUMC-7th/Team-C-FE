import { useParams } from 'react-router-dom';
import * as S from './PostDetails.style';
import { useState, useEffect } from 'react';
import CommentList from '../../components/comment/CommentList';
import CommentInput from '../../components/comment/CommentInput';
import EditMenu from '../../components/editMenu/EditMenu';
import { getPostDetail } from '../../apis/post';

function PostDetails() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [commentCount, setCommmetCount] = useState(0); // 초기값 0

  useEffect(() => {
    const fetchPostDetail = async () => {
      try {
        const data = await getPostDetail({ articleId: postId });
        setPost(data);
        setCommmetCount(data.commentCount || 0); // 댓글 수 초기화
      } catch (error) {
        console.error('게시물 불러오기 실패:', error);
      }
    };

    fetchPostDetail();
  }, [postId]);

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim() !== '') {
      setComments((comments) => [...comments, newComment]);
      setCommmetCount((count) => count + 1);
      setNewComment('');
    }
  };

  // postData가 null이 아닐 때만 접근
  const postData = post?.data;

  if (!postData) {
    return <S.Container>게시글을 불러오는 중입니다...</S.Container>;
  }

  // 날짜, 시간 포맷팅
  const formattedDateTime = postData.updatedAt.split('T');
  const formattedDate = formattedDateTime[0];
  const formattedTime = formattedDateTime[1].substring(0, 5);
  const displayDateTime = `${formattedDate} ${formattedTime}`;

  return (
    <S.Container>
      <S.AuthorBox>
        <S.AuthorInfo>
          <img src={'https://bit.ly/4fhflX4'} alt={'사진'} />
          <div>
            <p>{postData.memberDataDTO.nickName}</p>
            <h6>{displayDateTime}</h6>
          </div>
        </S.AuthorInfo>
        <EditMenu />
      </S.AuthorBox>
      <S.PostContent>
        <h3>{postData.title}</h3>
        <p>{postData.content}</p>
      </S.PostContent>
      <S.CommentCount>
        <S.CommentIcon />
        {commentCount}
      </S.CommentCount>
      <S.Divider />

      <CommentList comments={comments} />

      <form onSubmit={handleAddComment}>
        <CommentInput
          newComment={newComment}
          setNewComment={setNewComment}
          handleAddComment={handleAddComment}
        />
      </form>
    </S.Container>
  );
}

export default PostDetails;
