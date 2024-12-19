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
import { ModalContext } from './../../context/ModalContext';
import Portal from './../../components/Portal';
import { AlertModal } from '../../components/modal/AlertModal';
import updateImg2 from '../../images/updateImg2.svg';
import { useNavigate } from 'react-router-dom';
import DeleteProfiles from '../../components/deleteProfiles/DeleteProfiles';

function EditProfile() {
  updateVh();
  window.addEventListener('resize', updateVh);

  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);
  const navigate = useNavigate();

  // 프로필 정보 get 로직
  const { data: response, isLoading, isError } = useGetProfileDetails();

  const {
    profileImg = '',
    age = '',
    education = '',
    nickName = '',
    keywords = [],
    major = [],
    region = [],
  } = response?.data || {};

  const initialData = {
    profileImg,
    age,
    education,
    nickName,
    toggles: {
      keywords,
      major,
      region,
    },
  };

  // 프로필 수정 로직
  const {
    mutate,
    isLoading: isEditLoading,
    isError: isEditError,
    isSuccess: isEditSuccess,
  } = useEditProfile();

  const handleSubmitEditData = (data) => {
    mutate(data);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate('/my');
  };

  if (isEditSuccess) {
    setIsModalOpen(true);
  }

  if (isLoading || isEditLoading) {
    return <Loading />;
  }

  if (isError || !response?.data || isEditError) {
    return <Error />;
  }

  return (
    <S.Container>
      <SettingForm
        title={'정보 수정'}
        btnText={'수정하기'}
        isOriginMember={true}
        initialData={initialData}
        onSubmit={handleSubmitEditData}
        children={<DeleteProfiles />}
      />
      {isModalOpen && (
        <Portal>
          <AlertModal
            onClose={handleCloseModal}
            imgSrc={updateImg2}
            content={'수정되었습니다.'}
          />
        </Portal>
      )}
    </S.Container>
  );
}

export default EditProfile;
