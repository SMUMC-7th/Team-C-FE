import { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoginContext } from '../../context/LoginContext';
import { useGetGoogleOAuth } from '../../hooks/useGetProfile';

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

  if (isLoading) {
    return <div></div>;
  }

  return <></>;
}

export default GoogleOAuthHandler;
