import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const OutletContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: var(--size-max-width);
`;

export { Container, OutletContainer };
