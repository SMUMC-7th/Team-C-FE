import * as S from './Error.style';
import errorImg from '../../images/errorImg.svg';

const Error = () => {
  return (
    <S.Container>
      <img src={errorImg}></img>
      <S.Text>
        야옹? 페이지가 사라졌어요! <br />
        아마도 제 캣닢 아래 숨겨져 있을지도요 🌿
      </S.Text>
    </S.Container>
  );
};

export default Error;
