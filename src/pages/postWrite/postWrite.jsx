import * as S from './postWrite.style';
import { BsPencil } from 'react-icons/bs';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../../apis/post';
import Portal from '../../components/Portal';
import { AlertModal } from '../../components/modal/AlertModal';
import checked from '../../images/checked.svg';

const postWrite = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpload = async () => {
    if (title && content) {
      try {
        await createPost(title, content);
        setIsModalOpen(true);
        setTimeout(() => {
          setIsModalOpen(false);
          navigate('/community');
        }, 2500);
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
      {isModalOpen && (
        <Portal>
          <AlertModal
            setIsModalOpen={setIsModalOpen}
            imgSrc={checked}
            content="업로드되었습니다."
          />
        </Portal>
      )}
    </S.WriteContainer>
  );
};

export default postWrite;
