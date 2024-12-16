import { useNavigate, useLocation } from 'react-router-dom';
import { useGetNaverOAuth } from '../../hooks/useGetProfile';
import { useEffect, useContext } from 'react';
import { LoginContext } from '../../context/LoginContext';

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

  if (isLoading) {
    return <div></div>;
  }

  return <></>;
}

export default NaverOAuthHandler;
