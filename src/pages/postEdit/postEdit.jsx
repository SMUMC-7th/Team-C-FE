import * as S from '../postWrite/postWrite.style';
import { BsPencil } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updatePost, getPostDetail } from '../../apis/post';

const PostEdit = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // 게시글 수정 함수
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title.trim() === '' || content.trim() === '') {
      alert('제목과 내용을 모두 입력하세요.');
      return;
    }

    try {
      await updatePost({ articleId: postId, title, content });
      alert('게시글이 수정되었습니다!');
      navigate(`/community/${postId}`); // 수정 완료 후 게시글 상세로 이동
    } catch (error) {
      console.error('게시글 수정 실패:', error);
      alert('수정 중 오류가 발생했습니다.');
    }
  };

  // 게시글 상세 조회
  useEffect(() => {
    const fetchPostDetail = async () => {
      try {
        const data = await getPostDetail({ articleId: postId });
        setTitle(data.data?.title || '');
        setContent(data.data?.content || '');
        setIsLoading(false);
        // console.log(data);
      } catch (error) {
        console.error('게시글 불러오기 실패:', error);
        setIsLoading(false);
      }
    };

    fetchPostDetail();
  }, [postId]);

  if (isLoading) {
    return <S.WriteContainer>게시글을 불러오는 중입니다...</S.WriteContainer>;
  }

  return (
    <S.WriteContainer>
      <input
        type="text"
        id="title"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        id="content"
        placeholder="내용을 입력하세요"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <S.UploadButton>
        <button onClick={handleSubmit}>
          <BsPencil />
          수정하기
        </button>
      </S.UploadButton>
    </S.WriteContainer>
  );
};

export default PostEdit;