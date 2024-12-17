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
  const { isLogin, setIsLogin, profileImgUrl, setNickName } =
    useContext(LoginContext);

  const { data, isLoading, isSuccess, isError } = useGetProfile();
  useEffect(() => {
    if (isSuccess) {
      setIsLogin(true);
      setNickName(data?.data?.nickName);
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
      '/alarm',
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
        <S.Bell onClick={() => navigate('/alarm')}>
          <S.BellIcon></S.BellIcon>
        </S.Bell>
      </S.Nav>
    </S.Header>
  );
}

export { Header };
