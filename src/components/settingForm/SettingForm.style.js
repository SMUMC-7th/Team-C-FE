import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  padding: 0 6px;
  overflow-y: scroll;
`;

const FormTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: var(--color-gray-700);
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 12px;
`;

const SubmitBtn = styled.button`
  width: 100%;
  background-color: var(--color-blue-700);
  color: white;
  font-size: 12px;
  padding: 10px 15px;
  border: none;
  border-radius: 15px;
  margin-bottom: 30px;

  &:disabled {
    background-color: var(--color-gray-400);
  }
`;

export { Form, FormTitle, Section, SubmitBtn };
