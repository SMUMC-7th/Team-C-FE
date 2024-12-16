import { useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useGetKakaoOAuth } from '../../hooks/useGetProfile';
import { useQuery } from '@tanstack/react-query';
import { LoginContext } from '../../context/LoginContext';
import { generateToken } from '../../remote/firebase';
import { postDeviceToken } from '../../apis/deviceToken';
import { onMessage } from 'firebase/messaging';
import { messaging } from '../../remote/firebase';

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
  if ('Notification' in window && 'serviceWorker' in navigator) {
    console.log('통과');
    const useDeviceToken = () => {
      return useQuery({
        queryKey: ['token'],
        queryFn: async () => {
          const token = await generateToken();
          console.log('토큰', token);
          return postDeviceToken(token);
        },
        enabled: true,
      });
    };

    const { data: tokenResponse, error } = useDeviceToken();
    console.log('data', tokenResponse);

    onMessage(messaging, (payload) => {
      console.log(payload);
    });
  }

  if (isLoading) {
    return <div></div>;
  }

  return <></>;
}

export default KakaoOAuthHandler;
