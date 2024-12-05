import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useGetKakaoOAuth } from '../../hooks/useGetProfile';

function KakaoOAuthHandler() {
  const navigate = useNavigate();
  const location = useLocation();

  const url = new URLSearchParams(location.search);
  const code = url.get('code');

  const {
    data: response,
    isLoading,
    isSuccess,
    isError,
  } = useGetKakaoOAuth(code);

  if (isSuccess) {
    const { profileImgUrl, nickName, isOriginMember } = response.data;

    window.localStorage.setItem('profileImgUrl', profileImgUrl);
    window.localStorage.setItem('kakaoProfileImgUrl', profileImgUrl);
    window.localStorage.setItem('nickName', nickName);

    if (isOriginMember) {
      navigate('/home');
    } else {
      navigate('/settings');
    }
  }

  if (isError) {
    console.log('카카오 토큰 발급 실패');
  }
}

export default KakaoOAuthHandler;
