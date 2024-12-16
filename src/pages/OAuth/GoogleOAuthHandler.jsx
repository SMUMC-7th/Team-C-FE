import { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoginContext } from '../../context/LoginContext';
import { useGetGoogleOAuth } from '../../hooks/useGetProfile';
import { generateToken } from '../../remote/firebase';
import { postDeviceToken } from '../../apis/deviceToken';
import { onMessage } from 'firebase/messaging';
import { messaging } from '../../remote/firebase';
import { useQuery } from '@tanstack/react-query';
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
  console.log(isLoading);

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

  if ('Notification' in window && 'serviceWorker' in navigator) {
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

export default GoogleOAuthHandler;
