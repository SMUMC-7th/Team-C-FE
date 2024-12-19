import * as S from './ProfileImgUploader.style';
import { useState, useRef, useContext } from 'react';
import { MdModeEditOutline } from 'react-icons/md';
import Portal from './../Portal';
import ContentModal from '../modal/ContentModal';
import DefaultProfile from '../../images/defaultProfile.svg';
import { LoginContext } from '../../context/LoginContext';

function ProfileImgUploader({ profileImg, setProfileImg }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { kakaoProfileImg } = useContext(LoginContext);

  const handleUseKakaoProfile = () => {
    setProfileImg(kakaoProfileImg || DefaultProfile);
    setIsModalOpen(false);
  };

  const handleUseDefaultProfile = () => {
    setProfileImg(DefaultProfile);
    setIsModalOpen(false);
  };

  return (
    <S.ProfileContainer>
      <S.ProfileImg src={profileImg} alt="프로필 이미지" />
      <S.EditButton onClick={() => setIsModalOpen(true)}>
        <MdModeEditOutline />
      </S.EditButton>
      {isModalOpen && (
        <Portal>
          <ContentModal
            title="프로필 사진 변경"
            btnText1="소셜 프로필 사용"
            btnText2="기본 프로필 사용"
            onBtn1Click={handleUseKakaoProfile}
            onBtn2Click={handleUseDefaultProfile}
          />
        </Portal>
      )}
    </S.ProfileContainer>
  );
}

export { ProfileImgUploader };
