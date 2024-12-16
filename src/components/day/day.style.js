import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background-color: var(--color-gray-50);
  width: 345px;
  flex-direction: column;
  border-radius: 13px;
`;

const Date = styled.div`
  height: 34px;
  width: 71px;
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  font-size: 22px;
  margin: 13px;
  color: var(--color-gray-800);
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 13px;
  margin-right: 13px;
  margin-bottom: 10px;
  gap: 10px;
  align-items: center;
`;

export { Container, Date, Contents };
