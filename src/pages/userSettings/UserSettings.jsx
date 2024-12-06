import Portal from '../../components/Portal';
import { SettingForm } from '../../components/settingForm/SettingForm';
import { usePostInitProfile } from '../../hooks/useGetProfile';
import { Container } from './UserSetting.style';

function UserSettings() {
  const initialData = {
    profileImg: window.localStorage.getItem('profileImgUrl') || '',
    nickName: window.localStorage.getItem('nickName') || '',
    age: 1,
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
