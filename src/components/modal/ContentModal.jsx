import * as S from './ContentModal.style';

const ContentModal = ({
  title,
  message,
  children,
  btnText1,
  onBtn1Click,
  btnText2,
  onBtn2Click,
}) => {
  return (
    <S.ModalContainer>
      <S.ModalContent>
        <S.ModalTitle>{title}</S.ModalTitle>
        <S.Message>{message}</S.Message>
        {children}
        <S.BtnContainer>
          <S.BlueBtn onClick={onBtn1Click}>{btnText1}</S.BlueBtn>
          <S.DefaultBtn onClick={onBtn2Click}>{btnText2}</S.DefaultBtn>
        </S.BtnContainer>
      </S.ModalContent>
    </S.ModalContainer>
  );
};

export default ContentModal;
