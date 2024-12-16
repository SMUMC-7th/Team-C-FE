import * as S from './MyProfile.style';
import { IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useGetProfile } from '../../hooks/useGetProfile';
import { useContext } from 'react';
import { LoginContext } from './../../context/LoginContext';

const MyProfile = () => {
  const { nickName, profileImgUrl } = useContext(LoginContext);
  const { data: response, isLoading, isError } = useGetProfile();
  const age = response?.data?.age || '';
  const education = response?.data?.education || '';

  return (
    <>
      <S.Container>
        <h2>내 프로필</h2>
        <S.Box>
          <S.InfoContainer>
            <S.ProfileImg src={profileImgUrl} />
            <S.NickName>{nickName}</S.NickName>
            <S.AgeEducation>
              {age}세, {education}
            </S.AgeEducation>
          </S.InfoContainer>
          <S.ModifyBox>
            <S.ModifyBtn to="/my/settings">
              수정하기
              <IoIosArrowForward size="1.5rem" />
            </S.ModifyBtn>
          </S.ModifyBox>
        </S.Box>
      </S.Container>
    </>
  );
};

export { MyProfile };
