import { MyBookmark } from '../../components/myBookmark/MyBookmark';
import { MyProfile } from '../../components/myProfile/MyProfile';
import * as S from './Mypage.style';

function MyPage() {
  return (
    <S.Container>
      <MyProfile />
      <MyBookmark />
    </S.Container>
  );
}

export default MyPage;
