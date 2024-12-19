import * as S from './ProfileImgUploader.style';
import { useState, useRef, useContext } from 'react';
import { MdModeEditOutline } from 'react-icons/md';
import Portal from './../Portal';
import ContentModal from '../modal/ContentModal';
import { LoginContext } from '../../context/LoginContext';
import { DEFAULT_PROFILE } from '../../constants/menu';

function ProfileImgUploader({ profileImg, setProfileImg }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { kakaoProfileImg } = useContext(LoginContext);

  const handleUseKakaoProfile = () => {
    setProfileImg(kakaoProfileImg || DEFAULT_PROFILE);
    setIsModalOpen(false);
  };

  const handleUseDefaultProfile = () => {
    setProfileImg(DEFAULT_PROFILE);
    setIsModalOpen(false);
  };

  return (
    <S.ProfileContainer>
      <S.ProfileImg src={profileImg || DEFAULT_PROFILE} alt="프로필 이미지" />
      <S.EditButton onClick={() => setIsModalOpen(true)}>
        <MdModeEditOutline />
      </S.EditButton>
      {isModalOpen && (
        <Portal>
          <ContentModal
            title="프로필 사진 변경"
            btnText1="프로필 가져오기"
            btnText2="기본 프로필 사용하기"
            onBtn1Click={handleUseKakaoProfile}
            onBtn2Click={handleUseDefaultProfile}
          />
        </Portal>
      )}
    </S.ProfileContainer>
  );
}

export { ProfileImgUploader };
