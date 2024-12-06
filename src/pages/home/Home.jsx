import * as S from './Home.style';
import PolicyListLogin from '../../components/policyList/policyList';
import PolicyList from '../../components/policyList/notLogin/policyList';
import { useContext, useState, useEffect } from 'react';
import Banner from '../../components/banner/banner';
import { updateVh } from '../../utils/calculateVH';
import { LoginContext } from '../../context/LoginContext';

const Home = () => {
  const { isLogin } = useContext(LoginContext);
  const [nickName, setNickName] = useState(null);

  useEffect(() => {
    updateVh();
    window.addEventListener('resize', updateVh);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateVh);
    };
  }, []);

  useEffect(() => {
    if (isLogin) {
      const storedNickName = localStorage.getItem('nickName');
      setNickName(storedNickName);
    }
  }, [isLogin]); // Only run when isLogin changes

  return (
    <S.Container>
      <Banner />
      <S.PolicyContainer>
        {isLogin ? (
          <>
            <S.Title>✨ {nickName}님을 위한 추천정책</S.Title>
            <PolicyListLogin />
          </>
        ) : (
          <>
            <S.Title>🎯 랜덤 정책 추천</S.Title>
            <PolicyList />
          </>
        )}
      </S.PolicyContainer>
    </S.Container>
  );
};

export default Home;
