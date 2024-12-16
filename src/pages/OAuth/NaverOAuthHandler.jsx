import { useNavigate, useLocation } from 'react-router-dom';
import { useGetNaverOAuth } from '../../hooks/useGetProfile';
import { useEffect, useContext } from 'react';
import { LoginContext } from '../../context/LoginContext';
import { generateToken } from '../../remote/firebase';
import { postDeviceToken } from '../../apis/deviceToken';
import { onMessage } from 'firebase/messaging';
import { messaging } from '../../remote/firebase';
import { useQuery } from '@tanstack/react-query';
function NaverOAuthHandler() {
  const navigate = useNavigate();
  const location = useLocation();

  const url = new URLSearchParams(location.search);
  const code = url.get('code');
  console.log(code);

  const { setNickName, setProfileImgUrl, setKakaoProfileImg } =
    useContext(LoginContext);
  const {
    data: response,
    isLoading,
    isError,
    isSuccess,
  } = useGetNaverOAuth(code);
  console.log(response);

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
      console.error('네이버 토큰 발급 실패');
    }
  }, [isError]);

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

  if (isLoading) {
    return <div></div>;
  }

  return <></>;
}

export default NaverOAuthHandler;
