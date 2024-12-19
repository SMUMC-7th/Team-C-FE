import * as S from './AlertModal.style';

const AlertModal = ({ setIsModalOpen, imgSrc, content, onClose }) => {
  return (
    <S.ModalContainer>
      <S.ModalContent>
        <S.CloseContainer>
          <S.CloseBtn
            onClick={setIsModalOpen ? () => setIsModalOpen(false) : onClose}
          />
        </S.CloseContainer>
        <S.ContentContainer>
          <S.AlertImg src={imgSrc} />
          <S.Content>{content}</S.Content>
        </S.ContentContainer>
      </S.ModalContent>
    </S.ModalContainer>
  );
};

export { AlertModal };

// usage
// <AlertModal
//   setIsModalOpen={setIsModalOpen}
//   imgSrc={policyImg1}
//   content="수정되었습니다."
// />
