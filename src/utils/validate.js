const nicknamePattern = /^(?=.*[0-9])(?=.*[가-힣ㄱ-ㅎ])[가-힣ㄱ-ㅎ0-9]{1,10}$/;

function validateUser(values) {
  const errors = {};

  // 닉네임 유효성 검사
  if (!values.nickName) {
    errors.nickName = '닉네임을 반드시 입력해주세요.';
  } else if (!nicknamePattern.test(values.nickName)) {
    errors.nickName =
      '닉네임은 10자 이내의 한글 또는 영어와 숫자 조합이어야 합니다.';
  }

  // 나이 유효성 검사
  if (!values.age) {
    errors.age = '나이를 입력해주세요.';
  } else if (isNaN(values.age)) {
    errors.age = '나이는 숫자만 입력해야 합니다.';
  } else if (values.age < 1) {
    errors.age = '나이를 정확히 입력해주세요.';
  }

  return errors;
}

export { validateUser };
