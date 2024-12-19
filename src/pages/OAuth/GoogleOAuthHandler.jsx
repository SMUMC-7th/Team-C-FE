import { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoginContext } from '../../context/LoginContext';
import { useGetGoogleOAuth } from '../../hooks/useGetProfile';
import { generateToken } from '../../remote/firebase';
import { postDeviceToken } from '../../apis/deviceToken';
import { onMessage } from 'firebase/messaging';
import { messaging } from '../../remote/firebase';
import { useQuery } from '@tanstack/react-query';
import { useDeviceToken } from '../../apis/deviceToken';

function GoogleOAuthHandler() {
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
  } = useGetGoogleOAuth(code);

  useEffect(() => {
    if (isSuccess) {
      const { profileImgUrl, nickName, isOriginMember } = response.data;

      setNickName(nickName);
      setProfileImgUrl(profileImgUrl);
      setKakaoProfileImg(profileImgUrl);

      if (isOriginMember) {
        navigate('/home');
      } else {
        navigate('/settings');
      }
    }
  }, [isSuccess, response, navigate]);

  useEffect(() => {
    if (isError) {
      console.error('구글 토큰 발급 실패');
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
    return <div></div>;
  }

  return <></>;
}

export default GoogleOAuthHandler;
