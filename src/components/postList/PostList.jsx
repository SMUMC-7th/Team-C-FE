import * as S from './PostList.style';
import { useNavigate } from 'react-router-dom';

const PostList = ({ posts }) => {
  const navigate = useNavigate();

  const handlePostClick = (postId) => {
    navigate(`/community/${postId}`);
  };

  return (
    <S.BoardContainer>
      {posts.map((post) => (
        <S.PostItem
          key={post.articleId}
          onClick={() => handlePostClick(post.articleId)}
        >
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <span>
            <S.CommentIcon />
            {post.count}
          </span>
        </S.PostItem>
      ))}
    </S.BoardContainer>
  );
};

export default PostList;
