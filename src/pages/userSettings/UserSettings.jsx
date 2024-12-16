import Portal from '../../components/Portal';
import { SettingForm } from '../../components/settingForm/SettingForm';
import { LoginContext } from '../../context/LoginContext';
import { usePostInitProfile } from '../../hooks/useGetProfile';
import { Container } from './UserSetting.style';
import { useContext } from 'react';
import DefaultProfile from '../../images/defaultProfile.svg';

function UserSettings() {
  const { profileImgUrl, nickName } = useContext(LoginContext);
  const initialData = {
    profileImg: profileImgUrl || DefaultProfile,
    nickName: nickName || '',
    age: '',
  };

  const { mutate, isLoading, isError } = usePostInitProfile();

  const handleSubmitOriginData = (data) => {
    mutate(data);
  };

  if (isLoading) {
    return <div></div>;
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
    </Portal>
  );
}

export default UserSettings;
