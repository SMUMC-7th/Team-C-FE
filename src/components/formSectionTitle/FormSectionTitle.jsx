import * as S from './FormSectionTitle.style';

const FormSectionTitle = ({ title, isOptional, additional }) => (
  <S.SectionTitle>
    <S.Title>{title}</S.Title>
    {!isOptional && <S.Asterisk>*</S.Asterisk>}
    {additional && <S.Additional>{additional}</S.Additional>}
  </S.SectionTitle>
);

export { FormSectionTitle };
