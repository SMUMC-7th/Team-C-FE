import { useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useGetKakaoOAuth } from '../../hooks/useGetProfile';
import { useQuery } from '@tanstack/react-query';
import { LoginContext } from '../../context/LoginContext';
import { generateToken } from '../../remote/firebase';
import { postDeviceToken } from '../../apis/deviceToken';
import { onMessage } from 'firebase/messaging';
import { messaging } from '../../remote/firebase';

const useDeviceToken = () => {
  return useQuery({
    queryKey: ['deviceToken'],
    queryFn: async () => {
      if (
        typeof window !== 'undefined' &&
        'Notification' in window &&
        'serviceWorker' in navigator
      ) {
        // 브라우저 지원 여부 확인
        const token = await generateToken();
        if (token) {
          console.log('토큰 생성 완료:', token);
          return postDeviceToken(token);
        }
        throw new Error('푸시 알림 토큰 생성 실패');
      } else {
        console.warn('알림 또는 서비스 워커를 지원하지 않는 브라우저입니다.');
        return null;
      }
    },
    enabled: true,
  });
};

function KakaoOAuthHandler() {
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
  } = useGetKakaoOAuth(code);
  const { data: tokenResponse, error: tokenError } = useDeviceToken();

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
      console.error('카카오 토큰 발급 실패');
    }
  }, [isError]);

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

export default KakaoOAuthHandler;
