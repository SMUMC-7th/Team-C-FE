import * as S from './SettingForm.style';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { FORM_MENU } from '../../constants/form_menu';
import { ToggleBtnGroup } from '../toggleBtnGroup/ToggleBtnGroup';
import { validateUser } from '../../utils/validate';
import { ProfileImgUploader } from '../profileImgUploader/ProfileImgUploader';
import { InputField } from '../inputField/InputField';
import { LoginContext } from '../../context/LoginContext';

function SettingForm({
  title,
  btnText,
  isOriginMember,
  initialData,
  onSubmit,
}) {
  const navigate = useNavigate();
  const [profileImg, setProfileImg] = useState(initialData.profileImg);
  const [nickName, setNickName] = useState(initialData.nickName);
  const [age, setAge] = useState(initialData.age);
  const {
    setNickName: setNickname,
    setProfileImgUrl,
    setKakaoProfileImg,
  } = useContext(LoginContext);

  const {
    values,
    errors,
    touched,
    getTestInputProps,
    isFormValid,
    setToggleSelections,
    getSelectedOptions,
  } = useForm({
    initialValue: {
      nickName: initialData.nickName || '',
      age: initialData.age || '',
    },
    validate: validateUser,
    formMenu: FORM_MENU,
  });

  useEffect(() => {
    setProfileImg(initialData.profileImg);
    setNickName(initialData.nickName);
    setAge(initialData.age);
  }, [initialData]);

  const handleToggleChange = (toggles) => {
    setToggleSelections(toggles);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      const [educations, majors, regions, keyword] = getSelectedOptions();
      onSubmit({
        profileImg,
        nickName,
        age,
        educations,
        majors,
        regions,
        keyword,
      });
    }
    setNickname(nickName);
    setProfileImgUrl(profileImg);
    setKakaoProfileImg(profileImg);
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.FormTitle>{title}</S.FormTitle>
      <ProfileImgUploader
        profileImg={profileImg}
        setProfileImg={setProfileImg}
      />
      <S.Section>
        <InputField
          label="닉네임"
          type="text"
          placeholder="특수문자 없이 10자 이내로 작성해주세요."
          {...getTestInputProps('nickName')}
          error={touched.nickName && errors.nickName}
        />

        <InputField
          label="나이"
          type="number"
          min="1"
          placeholder="만 나이 숫자만 입력해주세요."
          {...getTestInputProps('age')}
          error={touched.age && errors.age}
        />

        <ToggleBtnGroup
          formMenu={FORM_MENU}
          onToggleChange={handleToggleChange}
        />
      </S.Section>

      <S.SubmitBtn type="submit" disabled={!isFormValid}>
        {btnText}
      </S.SubmitBtn>
    </S.Form>
  );
}

export { SettingForm };
