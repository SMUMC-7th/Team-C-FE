import { styled } from 'styled-components';

const Container = styled.div`
  width: min(100%, var(--size-max-width));
  height: calc(var(--vh, 1vh) * 100 - 30px);
  padding: 0 var(--size-side-gap);
  margin: 30px 0;
  overflow-y: scroll;
`;

export { Container };
