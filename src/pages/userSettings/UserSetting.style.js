import { styled } from 'styled-components';

const Container = styled.div`
  width: min(100%, var(--size-max-width));
  height: 100%;
  padding: 0 var(--size-side-gap);
  margin: calc(var(--size-header) - 10px) 0 0;
  overflow: hidden;
`;

export { Container };
