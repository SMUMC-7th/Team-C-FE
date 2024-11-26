import * as S from './PolicyRecommend.style';
import PolicyList from '../../components/policyList/policyList';
import { useState } from 'react';
import userInfo from '../../mocks/userData.json';
const user = userInfo[0];

function PolicyRec() {
  const [isLogin, setIsLogin] = useState(false);
  !isLogin && alert('로그인이 필요한 서비스입니다');
  window.location.href = '/home';

  return (
    <S.Container>
      <S.PolicyContainer>
        <PolicyList isLogin={isLogin} {...user}></PolicyList>
      </S.PolicyContainer>
    </S.Container>
  );
}

export default PolicyRec;
