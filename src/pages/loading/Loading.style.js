import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: var(--size-inner-max-width);
  height: calc(var(--vh, 1vh) * 100 - 190px);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 38px;
`;

const Text = styled.div`
  font-size: 16px;
  color: #61646b;
  display: flex;
`;

export { Container, Text };
