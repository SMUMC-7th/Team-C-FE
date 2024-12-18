import * as S from './Landing.style';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { SiNaver } from 'react-icons/si';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import logo_wg from '../../images/logo_wg.svg';
import Portal from './../../components/Portal';
import { updateVh } from '../../utils/calculateVH';
import { isSupported } from 'firebase/messaging';
async function requestPermission() {
  // Firebase Messaging 지원 여부 확인
  const supported = await isSupported();
  if (!supported) {
    console.warn('이 브라우저는 알림을 지원하지 않습니다.');
    return; // 알림 기능 없이 종료
  }

  // Notification 지원 여부 확인
  if (typeof Notification === 'undefined') {
    console.warn('이 브라우저는 알림을 지원하지 않습니다.');
    return;
  }

  console.log('권한 요청 중...');
  Notification.requestPermission()
    .then((permission) => {
      if (permission === 'granted') {
        console.log('알림 권한이 허용됨');
        // FCM 메시지 처리 로직 추가 가능
      } else if (permission === 'denied') {
        console.log('알림 권한이 거부됨');
      } else {
        console.log('알림 권한 요청이 무시됨');
      }
    })
    .catch((error) => {
      console.error('알림 권한 요청 중 오류 발생:', error);
    });
}

function Landing() {
  requestPermission();

  const kakaoLoginUrl = `${import.meta.env.VITE_KAKAO_URL}?response_type=code&client_id=${import.meta.env.VITE_KAKAO_REST_API_KEY}&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URI}`;

  const naverLoginUrl = `https://nid.naver.com/oauth2.0/authorize?client_id=${import.meta.env.VITE_NAVER_CLIENT_ID}&response_type=code&redirect_uri=${import.meta.env.VITE_NAVER_REDIRECT_URI}&state=${import.meta.env.VITE_NAVER_CLIENT_SECRET}`;

  const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${import.meta.env.VITE_GOOGLE_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_GOOGLE_REDIRECT_URI}&response_type=code&scope=email profile`;

  const handleNonMember = () => {
    // document.cookie =
    //   'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    // document.cookie =
    //   'refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  };

  updateVh();
  window.addEventListener('resize', updateVh);

  return (
    <Portal>
      <S.Container>
        <S.LogoContainer>
          <S.Logo src={logo_wg} />
          <S.Slogan>청년들의 사회 적응 길라잡이</S.Slogan>
        </S.LogoContainer>
        <S.LoginContainer>
          <S.LoginTitle>간편 로그인</S.LoginTitle>
          <S.LoginBtnContainer>
            <S.LoginButton type={'kakao'} href={kakaoLoginUrl}>
              <RiKakaoTalkFill size={'1.5rem'} />
            </S.LoginButton>
            <S.LoginButton type={'naver'} href={naverLoginUrl}>
              <SiNaver size={'1rem'} />
            </S.LoginButton>
            <S.LoginButton type={'google'} href={googleLoginUrl}>
              <FcGoogle size={'1.5rem'} />
            </S.LoginButton>
            <S.GuestLogin onClick={handleNonMember} to="/home">
              비회원으로 이용하기
            </S.GuestLogin>
          </S.LoginBtnContainer>
        </S.LoginContainer>
      </S.Container>
    </Portal>
  );
}

export default Landing;
