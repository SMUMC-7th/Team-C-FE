import * as S from './postWrite.style';
import { BsPencil } from 'react-icons/bs';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../../apis/post';

const postWrite = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleUpload = async () => {
    if (title && content) {
      try {
        await createPost(title, content);
        alert('게시글이 업로드되었습니다!');
        navigate('/community');
      } catch (error) {
        console.error('게시글 업로드 실패:', error);
        alert('업로드에 실패했습니다.');
      }
    } else {
      alert('제목과 내용을 모두 입력하세요.');
    }
  };

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
        <button onClick={handleUpload}>
          <BsPencil />
          업로드
        </button>
      </S.UploadButton>
    </S.WriteContainer>
  );
};

export default postWrite;
