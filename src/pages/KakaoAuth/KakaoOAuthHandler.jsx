import { useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

function KakaoOAuthHandler() {
  const location = useLocation();
  const navigate = useNavigate();

  const code = new URLSearchParams(location.search).get('code');

  const sendGetRequest = async () => {
    try {
      if (code) {
        const response = await axios.get(
          `${import.meta.env.VITE_KAKAO_REDIRECT_URI}`,
          {
            params: {
              code: code,
            },
            withCredentials: true,
          }
        );
        console.log('로그인 요청 성공:', response.data);

        if (response.data.isSuccess) {
          navigate('/settings');
        }
      }
    } catch (error) {
      console.error('로그인 요청 실패:', error.message);
    }
  };

  useEffect(() => {
    if (code) {
      console.log('카카오 로그인 시도');
      sendGetRequest();
    }
  }, [code]);

  return <></>;
}

export default KakaoOAuthHandler;
