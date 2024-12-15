import * as S from './Header.style';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { IoChevronBack } from 'react-icons/io5';
import { LuUserCircle2 } from 'react-icons/lu';
import logo_bg from '../../images/logo_bg.svg';
import { LoginContext } from '../../context/LoginContext';
import { useGetProfile } from '../../hooks/useGetProfile';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLogin, setIsLogin, profileImgUrl } = useContext(LoginContext);

  const { data, isLoading, isSuccess, isError } = useGetProfile();

  useEffect(() => {
    if (isSuccess) {
      setIsLogin(true);
    } else if (isError) {
      setIsLogin(false);
    }
  }, [isSuccess, isError, setIsLogin]);

  const showBackBtn = () => {
    const backBtnPath = [
      '/my',
      '/policy',
      '/community',
      '/calendar',
      '/recommend',
      '/postwrite',
    ];

    return backBtnPath.some((path) => location.pathname.startsWith(path));
  };

  const showLogoAndProfile = () => {
    return location.pathname === '/home';
  };

  const showWriteTitle = () => {
    return location.pathname === '/postwrite';
  };

  return (
    <S.Header>
      <S.Nav>
        {showBackBtn() && <IoChevronBack onClick={() => navigate(-1)} />}
        {showLogoAndProfile() && <S.Logo src={logo_bg} />}
        <S.Profile onClick={() => navigate('/my')}>
          {isSuccess && isLogin && profileImgUrl ? (
            <S.UserImg src={profileImgUrl} alt="사용자 프로필" />
          ) : (
            <LuUserCircle2 />
          )}
        </S.Profile>
      </S.Nav>
    </S.Header>
  );
}

export { Header };
