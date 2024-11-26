import * as S from './Header.style';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { IoChevronBack } from 'react-icons/io5';
import { LuUserCircle2 } from 'react-icons/lu';
import logo_bg from '../../images/logo_bg.svg';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [userImg, setUserImg] = useState(null);

  // 추후 수정 필요. 현재는 로컬스토리지 값을 가져오도록 함
  useEffect(() => {
    const profileDataString = localStorage.getItem('profileData');

    if (profileDataString) {
      try {
        const { user_img } = JSON.parse(profileDataString);
        if (user_img) {
          setUserImg(user_img);
        }
      } catch (error) {
        console.error('프로필 데이터가 존재하지 않습니다.', error);
      }
    }
  }, []);

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
          {userImg ? (
            <S.UserImg src={userImg} alt="사용자 프로필" />
          ) : (
            <LuUserCircle2 />
          )}
        </S.Profile>
      </S.Nav>
    </S.Header>
  );
}

export { Header };
