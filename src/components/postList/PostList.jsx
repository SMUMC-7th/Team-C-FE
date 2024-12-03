import * as S from './PostList.style';
import { useNavigate } from 'react-router-dom';

const PostList = ({ posts }) => {
  const navigate = useNavigate();

  const handlePostClick = (postId) => {
    navigate(`/community/${postId}`);
  };

  // console.log(posts);

  return (
    <S.BoardContainer>
      {posts.map((post) => (
        <S.PostItem key={post.id} onClick={() => handlePostClick(post.id)}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <span>
            <S.CommentIcon />
            {post.commentCount}
          </span>
        </S.PostItem>
      ))}
    </S.BoardContainer>
  );
};

export default PostList;
