import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100 - 180px);
  display: flex;
  flex-direction: column;
  gap: 22px;
  overflow-y: scroll;
`;

export { Container };
