import * as S from './home.style';
import PolicyList from '../../components/policyList/policyList';
import { useState } from 'react';
import Banner from '../../components/banner/banner';
import userInfo from '../../mocks/userData.json';
const user = userInfo[0];

const Home = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <S.Container>
      <Banner></Banner>
      <S.PolicyContainer>
        {isLogin ? (
          <>
            <S.Title>✨ {user.nickName}님을 위한 추천정책</S.Title>
            <PolicyList isLogin={isLogin} {...user}></PolicyList>
          </>
        ) : (
          <>
            <S.Title>🚨 랜덤 정책 추천</S.Title>
            <PolicyList isLogin={isLogin}></PolicyList>
          </>
        )}
      </S.PolicyContainer>
    </S.Container>
  );
};

export default Home;
