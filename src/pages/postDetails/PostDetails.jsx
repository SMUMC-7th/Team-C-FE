import { useParams, useNavigate } from 'react-router-dom';
import * as S from './PostDetails.style';
import { useState, useEffect, useContext } from 'react';
import CommentList from '../../components/comment/CommentList';
import CommentInput from '../../components/comment/CommentInput';
import EditMenu from '../../components/editMenu/EditMenu';
import { getPostDetail, deletePost } from '../../apis/post';
import { getComments, createComment } from '../../apis/comment';
import useStore from '../../store/store';
import Loading from '../loading/Loading';
import { LoginContext } from '../../context/LoginContext';
function PostDetails() {
  const { profileImgUrl } = useContext(LoginContext);
  const { postId } = useParams();
  const articleId = Number(postId);
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [cursorId, setCursorId] = useState(0);
  const navigate = useNavigate();
  const { commentCount, setCommentCount } = useStore();

  const fetchPostDetail = async () => {
    try {
      const data = await getPostDetail({ articleId: postId });
      setPost(data);
      setCommentCount(data.commentCount || 0); // 댓글 수 초기화
    } catch (error) {
      console.error('게시물 불러오기 실패:', error);
    }
  };

  const fetchComments = async () => {
    try {
      const res = await getComments({
        articleId,
        cursorId: cursorId,
        pageSize: 15,
      });
      const replyList = res?.data?.replyList || [];
      setComments(replyList);

      if (res.data.nextCursorId) {
        setCursorId(res.data.nextCursorId);
      }

      console.log(replyList);
    } catch (error) {
      console.error('댓글 불러오기 실패:', error);
    }
  };

  useEffect(() => {
    fetchPostDetail();
    fetchComments();
    console.log(comments);
  }, [postId, cursorId]);

  // console.log(postId);

  const handleAddComment = async (e) => {
    e.preventDefault();

    if (!newComment.trim()) {
      alert('댓글을 입력해주세요.');
      return;
    }

    const commentData = {
      articleId,
      content: newComment,
      nickName: name,
      parentId: null,
    };

    try {
      const newReply = await createComment(commentData);
      newReply.imgUrl = profileImgUrl;
      setComments((prev) => [...prev, newReply]);
      setCommentCount(commentCount + 1);
      setNewComment('');
    } catch (error) {
      console.error('댓글 추가 실패:', error);
      alert('댓글 추가에 실패했습니다.');
    }
  };

  const handleDeletePost = async () => {
    try {
      await deletePost({ articleId: postId });
      alert('게시글이 삭제되었습니다.');
      navigate('/community');
    } catch (error) {
      console.error('게시글 삭제 실패:', error);
      alert('게시글 삭제 중 오류가 발생했습니다.');
    }
  };

  const handleEditPost = (postId) => {
    navigate(`/postedit/${postId}`);
  };

  // postData가 null이 아닐 때만 접근
  const postData = post?.data;
  console.log(postData);
  const name = postData?.memberDataDTO.nickName;

  if (!postData) {
    return <Loading></Loading>;
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
          <img src={postData.memberDataDTO.imgUrl} alt={'사진'} />
          <div>
            <p>{postData.memberDataDTO.nickName}</p>
            <h6>{displayDateTime}</h6>
          </div>
        </S.AuthorInfo>
        <EditMenu
          onEdit={() => handleEditPost(postId)}
          onDelete={() => handleDeletePost()}
        />
      </S.AuthorBox>
      <S.PostContent>
        <h3>{postData.title}</h3>
        <p>{postData.content}</p>
      </S.PostContent>
      <S.CommentCount>
        <S.CommentIcon />
        {postData.count}
      </S.CommentCount>
      <S.Divider />

      <CommentList
        comments={comments}
        articleId={postId}
        setComments={setComments}
      />

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
