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
            navigate('/settings');
          } else {
            console.log(response.status);
          }
        } catch (error) {
          console.log(error.message);
          navigate('/');
        }
      }
    };
    handleLogin();
  }, [code, navigate]);

  return <></>;
}

export default Login;
