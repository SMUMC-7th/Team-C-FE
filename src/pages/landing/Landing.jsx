import * as S from './Landing.style';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import logo_wg from '../../images/logo_wg.svg';
import Portal from './../../components/Portal';

function Landing() {
  const loginUrl = `${import.meta.env.VITE_KAKAO_URL}?response_type=code&client_id=${import.meta.env.VITE_KAKAO_REST_API_KEY}&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URI}`;

  return (
    <Portal>
      <S.Container>
        <S.LogoContainer>
          <S.Logo src={logo_wg} />
          <S.Slogan>청년들의 사회 적응 길라잡이</S.Slogan>
        </S.LogoContainer>
        <S.LoginContainer>
          <S.LoginTitle>간편 로그인</S.LoginTitle>
          <S.KakaoLoginButton href={loginUrl}>
            <RiKakaoTalkFill size={'1.5rem'} />
            카카오 로그인
          </S.KakaoLoginButton>
          <S.GuestLogin to="/home">비회원으로 이용하기</S.GuestLogin>
        </S.LoginContainer>
      </S.Container>
    </Portal>
  );
}

export default Landing;
