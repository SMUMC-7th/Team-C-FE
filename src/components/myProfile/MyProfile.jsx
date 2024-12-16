import * as S from './MyProfile.style';
import { useState, useEffect } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const MyProfile = () => {
  const [userImg, setUserImg] = useState(null);
  const [nickName, setNickName] = useState(null);
  const [age, setAge] = useState(null);
  const [education, setEducation] = useState(null);
  // Context-API 추가할 예정
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const profileDataString = localStorage.getItem('profileData');

    if (profileDataString) {
      try {
        const profileData = JSON.parse(profileDataString);
        const { user_img, nickName, age } = profileData;
        const education = profileData.selectedValues?.학력?.[0];
        setUserImg(user_img);
        setNickName(nickName);
        setAge(age);
        setEducation(education);
        setIsLoggedIn(true);
      } catch (error) {
        console.error('프로필 데이터가 존재하지 않습니다.', error);
      }
    }
  }, []);

  if (!isLoggedIn) {
    return <p>로그인이 필요한 서비스입니다.</p>;
  }

  return (
    <S.Container>
      <h2>내 프로필</h2>
      <S.Box>
        <S.InfoContainer>
          <S.ProfileImg src={userImg} />
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
  );
};

export { MyProfile };
