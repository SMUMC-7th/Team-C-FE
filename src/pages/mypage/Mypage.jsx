import { MyBookmark } from '../../components/myBookmark/MyBookmark';
import { MyProfile } from '../../components/myProfile/MyProfile';
import * as S from './Mypage.style';
import { useState, useEffect, useContext } from 'react';
import { LoginContext } from './../../context/LoginContext';
import { useNavigate } from 'react-router-dom';
import Portal from './../../components/Portal';
import ContentModal from './../../components/modal/ContentModal';

function MyPage() {
  const navigate = useNavigate();
  const { isLogin, nickName } = useContext(LoginContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isLogin === false) {
      setIsModalOpen(true);
    }
  }, [isLogin]);

  return (
    <>
      {isModalOpen && (
        <Portal>
          <ContentModal
            title="로그인하시겠습니까?"
            message="로그인이 필요한 서비스입니다."
            btnText1="로그인"
            btnText2="닫기"
            onBtn1Click={() => navigate('/')}
            onBtn2Click={() => {
              navigate('/home');
              setIsModalOpen(false);
            }}
          />
        </Portal>
      )}
      <S.Container>
        <MyProfile />
        <MyBookmark />
      </S.Container>
    </>
  );
}

export default MyPage;
