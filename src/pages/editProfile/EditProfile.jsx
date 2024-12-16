import * as S from './EditProfile.style';
import { SettingForm } from '../../components/settingForm/SettingForm';

function EditProfile() {
  return <SettingForm title={'정보 수정'} btnText={'수정하기'} full={false} />;
}

export default EditProfile;
