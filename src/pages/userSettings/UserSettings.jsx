import Portal from '../../components/Portal';
import { SettingForm } from '../../components/settingForm/SettingForm';
import { Container } from './UserSetting.style';

function UserSettings() {
  return (
    <Portal>
      <Container>
        <SettingForm title={'정보 입력'} btnText={'회원가입하기'} />
      </Container>
    </Portal>
  );
}

export default UserSettings;
