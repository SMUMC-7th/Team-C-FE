import * as S from './Loading.style';
import LoadingAnimation from '../../components/loadingAnimation/loadingAnimation';
const Loading = () => {
  return (
    <S.Container>
      <LoadingAnimation></LoadingAnimation>
      <S.Text>잠시만 기다려주세요 😊</S.Text>
    </S.Container>
  );
};

export default Loading;
