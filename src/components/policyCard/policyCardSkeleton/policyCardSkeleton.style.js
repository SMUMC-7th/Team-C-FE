import styled, { keyframes } from 'styled-components';

const skeleton = keyframes`
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0.8;
  }
  50% {
    opacity: 0.5;
  }
  75% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }

`;

const Container = styled.div`
  display: flex;
  min-height: 156px;
  background: linear-gradient(
    to top left,
    rgba(244, 244, 244, 0.1),
    rgba(116, 215, 216, 0.1),
    rgba(88, 139, 226, 0.05)
  );
  border-radius: 20px;
  align-items: center;
  width: 345px;
  justify-content: center;
  animation: ${skeleton} 4s ease infinite;
`;

export { Container };
