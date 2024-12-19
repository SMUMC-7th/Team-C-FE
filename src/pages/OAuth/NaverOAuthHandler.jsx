import { useNavigate, useLocation } from 'react-router-dom';
import { useGetNaverOAuth } from '../../hooks/useGetProfile';
import { useEffect, useContext } from 'react';
import { LoginContext } from '../../context/LoginContext';
import { onMessage } from 'firebase/messaging';
import { messaging } from '../../remote/firebase';
import { useDeviceToken } from '../../apis/deviceToken';
import Loading from './../loading/Loading';

function NaverOAuthHandler() {
  const navigate = useNavigate();
  const location = useLocation();

  const url = new URLSearchParams(location.search);
  const code = url.get('code');

  const { setNickName, setProfileImgUrl, setKakaoProfileImg } =
    useContext(LoginContext);
  const {
    data: response,
    isLoading,
    isError,
    isSuccess,
  } = useGetNaverOAuth(code);

  useEffect(() => {
    if (isSuccess) {
      const { profileImg, nickName, isOriginMember } = response.data;

      setNickName(nickName);
      setProfileImgUrl(profileImg);
      setKakaoProfileImg(profileImg);

      if (isOriginMember) {
        navigate('/home');
      } else {
        navigate('/settings');
      }
    }
  }, [isSuccess, response, navigate]);

  useEffect(() => {
    if (isError) {
      console.error('네이버 토큰 발급 실패');
    }
  }, [isError]);

  const { data: tokenResponse, error: tokenError } = useDeviceToken(isSuccess);
  useEffect(() => {
    const unsubscribe = onMessage(messaging, (payload) => {
      console.log('푸시 메시지 수신:', payload);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return <></>;
}

export default NaverOAuthHandler;
