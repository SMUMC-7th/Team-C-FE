import { FormSectionTitle } from '../formSectionTitle/FormSectionTitle';
import * as S from './InputField.style';

const InputField = ({
  label,
  isOptional,
  additional,
  type,
  placeholder,
  error,
  ...inputProps
}) => (
  <S.FieldWrapper>
    {label && (
      <FormSectionTitle
        title={label}
        isOptional={isOptional}
        additional={additional}
      />
    )}
    <S.Input type={type} placeholder={placeholder} {...inputProps} />
    {error && <S.ErrorMsg>{error}</S.ErrorMsg>}
  </S.FieldWrapper>
);

export { InputField };
