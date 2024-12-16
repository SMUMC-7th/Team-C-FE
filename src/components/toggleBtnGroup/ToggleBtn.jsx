import * as S from './ToggleBtn.style';

function ToggleBtn({ onClick, isSelected, value }) {
  return (
    <S.ToggleBtn type="button" onClick={onClick} $isSelected={isSelected}>
      {value}
    </S.ToggleBtn>
  );
}

export { ToggleBtn };
