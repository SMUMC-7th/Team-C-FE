import styled from 'styled-components';

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Label = styled.label`
  font-size: 14px;
  color: var(--color-gray-700);
`;

const Input = styled.input`
  color: var(--color-gray-700);
  height: 20px;
  font-size: 12px;
  border: none;
  border-bottom: 1px solid var(--color-gray-200);
  padding: 0 5px 5px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: var(--color-gray-500);
  }
`;

const ErrorMsg = styled.p`
  color: red;
  font-size: 12px;
`;

export { FieldWrapper, Label, Input, ErrorMsg };
