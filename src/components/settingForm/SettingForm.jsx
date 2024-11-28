import * as S from './SettingForm.style';
import { FORM_MENU } from '../../constants/form_menu';
import { ToggleBtnGroup } from '../toggleBtnGroup/ToggleBtnGroup';
import useForm from '../../hooks/useForm';
import { validateUser } from '../../utils/validate';
import { ProfileImgUploader } from '../profileImgUploader/ProfileImgUploader';
import { InputField } from '../inputField/InputField';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SettingForm({ title, btnText, full }) {
  const initialValue = {
    nickName: '',
    age: '',
  };

  const {
    values,
    errors,
    touched,
    getTestInputProps,
    isFormValid,
    setToggleSelections,
    toggles,
  } = useForm({
    initialValue,
    validate: validateUser,
    formMenu: FORM_MENU,
  });

  const navigate = useNavigate();
  const [profileImg, setProfileImg] = useState(null);

  const handleToggleChange = (toggles) => {
    setToggleSelections(toggles);
  };

  const handleProfileChange = (img) => {
    setProfileImg(img);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedValues = {
      학력: [],
      분야: [],
      지역: [],
      '관심있는 키워드': [],
    };

    FORM_MENU.forEach((item, menuIdx) => {
      toggles[menuIdx].forEach((isSelected, optionIdx) => {
        if (isSelected) {
          selectedValues[item.title].push(item.options[optionIdx]);
        }
      });
    });

    const profileData = {
      user_token: '123',
      user_img: profileImg,
      nickName: values.nickName,
      age: values.age,
      selectedValues: selectedValues,
    };

    localStorage.setItem('profileData', JSON.stringify(profileData));

    navigate('/home');
  };

  return (
    <S.Form onSubmit={handleSubmit} full={values.toString(full)}>
      <S.FormTitle>{title}</S.FormTitle>
      <ProfileImgUploader onProfileChange={handleProfileChange} />
      <S.Section>
        <InputField
          label="닉네임"
          type="text"
          placeholder="특수문자 없이 6자 이내로 작성해주세요."
          {...getTestInputProps('nickName')}
          error={touched.nickName && errors.nickName}
        />

        <InputField
          label="나이"
          type="number"
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
