import * as S from './EditProfile.style';
import { SettingForm } from '../../components/settingForm/SettingForm';
import { useContext } from 'react';
import { LoginContext } from '../../context/LoginContext';
import {
  useEditProfile,
  useGetProfileDetails,
} from '../../hooks/useGetProfile';
import Error from '../error/Error';
import Loading from './../loading/Loading';
import { updateVh } from '../../utils/calculateVH';

function EditProfile() {
  updateVh();
  window.addEventListener('resize', updateVh);

  const { data: response, isLoading, isError } = useGetProfileDetails();

  if (isLoading) {
    return <Loading />;
  }

  if (isError || !response?.data) {
    return <Error />;
  }

  const { profileImg, age, education, nickName, keywords, major, region } =
    response?.data;

  const initialData = {
    profileImg: profileImg || '',
    age: age || '',
    education: education || '',
    nickName: nickName || '',
    toggles: {
      keywords: keywords || [],
      major: major || [],
      region: region || [],
    },
  };

  const handleSubmitEditData = () => {};

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
