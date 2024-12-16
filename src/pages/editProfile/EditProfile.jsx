import * as S from './EditProfile.style';
import { SettingForm } from '../../components/settingForm/SettingForm';
import { useContext } from 'react';
import { LoginContext } from '../../context/LoginContext';

function EditProfile() {
  const { profileImgUrl } = useContext(LoginContext);
  const initialData = {
    profileImg: profileImgUrl || '',
  };

  const handleSubmitEditData = (data) => {};

  return (
    <S.Container>
      <SettingForm
        title={'정보 수정'}
        btnText={'수정하기'}
        isOriginMember={true}
        initialData={initialData}
        onSubmit={handleSubmitEditData}
      />
    </S.Container>
  );
}

export default EditProfile;
