import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: calc(100% - var(--size-header) - var(--size-navbar));
  display: flex;
  flex-direction: column;
  gap: 22px;
  overflow-y: scroll;
`;

export { Container };
