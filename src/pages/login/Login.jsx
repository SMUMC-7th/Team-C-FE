import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const url = new URLSearchParams(location.search);
  const code = url.get('code');

  useEffect(() => {
    const handleLogin = async () => {
      if (code) {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_KAKAO_LOGIN_URI}?code=${code}`,
            { withCredentials: true }
          );

          if (response.status === 200) {
            console.log('쿠키 설정 확인: ', document.cookie);
            navigate('/settings');
          } else {
            console.log(response.status);
          }
        } catch (error) {
          if (error.response) {
            console.log('응답 상태: ', error.response.status);
            console.log('응답 데이터: ', error.response.data);
          } else if (error.request) {
            console.log('요청 객체: ', error.request);
          } else {
            console.log(error.message);
          }
        }
      }
    };
    handleLogin();
  }, [code, navigate]);

  return <></>;
}

export default Login;
