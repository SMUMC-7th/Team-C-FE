import { useContext } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getKakaoOAuth, postInitProfile } from '../apis/auth';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext';

function useGetKakaoOAuth(code) {
  return useQuery({
    queryFn: () => getKakaoOAuth(code),
    queryKey: ['getKakaoOAuth', code],
  });
}

function usePostInitProfile() {
  const navigate = useNavigate();
  const { setIsLogin } = useContext(LoginContext);

  const onSuccess = () => {
    alert('회원가입이 완료되었습니다.');
    setIsLogin(true);
    window.localStorage.removeItem('nickName');
    navigate('/home');
  };

  return useMutation({
    mutationFn: (data) => postInitProfile(data),
    mutationKey: ['InitProfile'],
    onSuccess: onSuccess,
    onError: (error) => console.log('프로필 초기 설정 오류', error),
  });
}

export { useGetKakaoOAuth, usePostInitProfile };
