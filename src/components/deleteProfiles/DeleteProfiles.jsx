import * as S from './DeleteProfiles.style';
import { useDeleteProfiles } from '../../hooks/useGetProfile';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContentModal from '../modal/ContentModal';
import Portal from '../Portal';
import { AlertModal } from '../modal/AlertModal';
import unsubscribeImg from '../../images/unsubscribeImg.svg';
import Error from '../../pages/error/Error';
import Loading from '../../pages/loading/Loading';

const DeleteProfiles = () => {
  const [nickName, setNickName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const { mutate, isLoading, isError, isSuccess } = useDeleteProfiles(nickName);
  const navigate = useNavigate();

  const handleUnsubscribe = () => {
    mutate(nickName);
  };

  if (isSuccess && !isSuccessModalOpen) {
    setIsSuccessModalOpen(true);
  }

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  const handleCloseSuccessModal = () => {
    navigate('/');
    setIsSuccessModalOpen(false);
  };

  const handleNickNameChange = (e) => {
    setNickName(e.target.value);
  };

  const nickNameInput = (
    <input
      type="text"
      placeholder="닉네임을 입력하세요."
      value={nickName}
      onChange={handleNickNameChange}
    />
  );

  const handleOpenDeleteModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <S.UnsubscribeBtn onClick={handleOpenDeleteModal}>
        회원 탈퇴하기
      </S.UnsubscribeBtn>

      {isModalOpen && (
        <Portal>
          <ContentModal
            title={'정말 탈퇴하시겠습니까?'}
            message={
              '닉네임 입력 후 확인을 누르면 탈퇴되어 모든 정보가 삭제됩니다.'
            }
            children={nickNameInput}
            btnText1="탈퇴하기"
            onBtn1Click={handleUnsubscribe}
            btnText2="취소"
            onBtn2Click={handleCloseDeleteModal}
          />
        </Portal>
      )}

      {isSuccessModalOpen && (
        <Portal>
          <AlertModal
            onClose={handleCloseSuccessModal}
            imgSrc={unsubscribeImg}
            content={'탈퇴되었습니다.'}
          />
        </Portal>
      )}
    </>
  );
};

export default DeleteProfiles;
