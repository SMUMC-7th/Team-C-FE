import Portal from '../../components/Portal';
import { SettingForm } from '../../components/settingForm/SettingForm';
import { LoginContext } from '../../context/LoginContext';
import { usePostInitProfile } from '../../hooks/useGetProfile';
import { Container } from './UserSetting.style';
import { useContext, useEffect } from 'react';
import Loading from '../loading/Loading';
import { DEFAULT_PROFILE } from '../../constants/menu';
import { useNavigate } from 'react-router-dom';
import { AlertModal } from '../../components/modal/AlertModal';
import { ModalContext } from '../../context/ModalContext';
import updateImg2 from '../../images/updateImg2.svg';
import Error from '../error/Error';

function UserSettings() {
  const { setIsLogin, profileImgUrl, nickName } = useContext(LoginContext);
  const navigate = useNavigate();
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);

  const initialData = {
    profileImg: profileImgUrl || DEFAULT_PROFILE,
    nickName: nickName || '',
    age: '',
    education: '',
    toggles: {
      keywords: [],
      major: [],
      region: [],
    },
  };

  const { mutate, isLoading, isError, isSuccess } = usePostInitProfile();

  const handleSubmitOriginData = (data) => {
    mutate(data);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate('/home');
  };

  if (isSuccess) {
    setIsModalOpen(true);
    setIsLogin(true);
  }

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <Portal>
      <Container>
        <SettingForm
          title={'정보 입력'}
          btnText={'회원가입하기'}
          isOriginMember={false}
          initialData={initialData}
          onSubmit={handleSubmitOriginData}
        />
      </Container>
      {isModalOpen && (
        <AlertModal
          onClose={handleCloseModal}
          imgSrc={updateImg2}
          content={'수정되었습니다.'}
        />
      )}
    </Portal>
  );
}

export default UserSettings;
