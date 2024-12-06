import * as S from './Home.style';
import PolicyListLogin from '../../components/policyList/policyList';
import PolicyList from '../../components/policyList/notLogin/policyList';
import { useContext, useState } from 'react';
import Banner from '../../components/banner/banner';
import userInfo from '../../mocks/userData.json';
import { updateVh } from '../../utils/calculateVH';
import { LoginContext } from '../../context/LoginContext';
import Portal from '../../components/Portal';
import ContentModal from '../../components/modal/ContentModal';
const Home = () => {
  const { isLogin } = useContext(LoginContext);
  updateVh();
  window.addEventListener('resize', updateVh);
  if (isLogin) {
    const nickName = localStorage.getItem('NickName');
  }

  return (
    <S.Container>
      <Banner></Banner>
      <S.PolicyContainer>
        {isLogin ? (
          <>
            <S.Title>✨ {nickName}님을 위한 추천정책</S.Title>
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
