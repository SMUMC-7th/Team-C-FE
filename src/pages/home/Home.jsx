import * as S from './Home.style';
import PolicyListLogin from '../../components/policyList/policyList';
import PolicyList from '../../components/policyList/notLogin/policyList';
import { useContext, useState } from 'react';
import Banner from '../../components/banner/banner';
import { updateVh } from '../../utils/calculateVH';
import { LoginContext } from '../../context/LoginContext';
import { useEffect } from 'react';

const Home = () => {
  const { isLogin } = useContext(LoginContext);
  const [nickname, setNickname] = useState('');
  updateVh();
  window.addEventListener('resize', updateVh);

  useEffect(() => {
    if (isLogin) {
      const storedNickName = localStorage.getItem('nickName');
      setNickname(storedNickName);
    }
  }, [isLogin]);

  return (
    <S.Container>
      <Banner></Banner>
      <S.PolicyContainer>
        {isLogin ? (
          <>
            <S.Title>✨ {nickname.split('의')[0]}님을 위한 추천정책</S.Title>
            <PolicyListLogin></PolicyListLogin>
          </>
        ) : (
          <>
            <S.Title>🎯 랜덤 정책 추천</S.Title>
            <PolicyList></PolicyList>
          </>
        )}
      </S.PolicyContainer>
    </S.Container>
  );
};

export default Home;
