import * as S from './NotFound.style';
import { IoChevronBack } from 'react-icons/io5';
import errorImg from '../../images/errorImg.svg';

const NotFound = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Nav>{<IoChevronBack onClick={() => history.back()} />}</S.Nav>
      </S.Header>
      <S.Content>
        <img src={errorImg}></img>
        <S.Text>
          야옹? 페이지가 사라졌어요! <br />
          아마도 제 캣닢 아래 숨겨져 있을지도요 🌿
        </S.Text>
      </S.Content>
    </S.Container>
  );
};

export default NotFound;
