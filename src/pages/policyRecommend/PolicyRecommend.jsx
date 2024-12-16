import * as S from './PolicyRecommend.style';
import PolicyList from '../../components/policyList/policyList';
import { updateVh } from '../../utils/calculateVH';
import { useContext, useState, useEffect } from 'react';
import { LoginContext } from '../../context/LoginContext';
import Portal from '../../components/Portal';
import ContentModal from '../../components/modal/ContentModal';
import { useNavigate } from 'react-router-dom';

function PolicyRec() {
  const { isLogin } = useContext(LoginContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    updateVh();
    const handleResize = () => updateVh();
    window.addEventListener('resize', handleResize);

    if (isLogin === false) {
      setIsModalOpen(true);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isLogin]);

  return (
    <>
      <S.Container>
        <S.PolicyContainer>
          <PolicyList></PolicyList>
        </S.PolicyContainer>
      </S.Container>
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
    </>
  );
}

export default PolicyRec;
