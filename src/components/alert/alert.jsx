import * as S from './alert.style';

const Alert = ({ content }) => {
  return (
    <S.Container>
      <S.Alert>{content}</S.Alert>
    </S.Container>
  );
};

export default Alert;
