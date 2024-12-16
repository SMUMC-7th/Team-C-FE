import styled, { keyframes } from 'styled-components';

const dot1 = keyframes`
  0% {
    top: 29px;
  }
  12% {
    top: 23px;
  }
  25% {
    top: 17px;
  }
  37% {
    top: 23px
  }
  50% {
    top: 29px
  }
  62% {
    top: 23px
  }
  75% {
    top: 17px;
  }
  87% {
    top: 23px;
  }
  100% {
    top: 29px;
  }
`;
const Container = styled.div`
  display: flex;
  background-color: #729dee;
  width: 125px;
  height: 70px;
  border-radius: 36px;
  position: relative;
`;

const Dot1 = styled.div`
  width: 12px;
  height: 12px;
  background-color: white;
  border-radius: 100%;
  position: absolute;
  animation: ${dot1} 2s ease-in infinite;
  left: 29px;
  top: 29px;
`;

const Dot2 = styled.div`
  width: 12px;
  height: 12px;
  background-color: white;
  border-radius: 100%;
  position: absolute;
  left: 57px;
  top: 29px;

  animation: ${dot1} 2s -0.4s ease-in infinite;
`;

const Dot3 = styled.div`
  width: 12px;
  height: 12px;
  background-color: white;
  border-radius: 100%;
  position: absolute;
  left: 85px;
  top: 29px;
  animation-delay: 1.5s;
  animation: ${dot1} 2s -0.8s ease-in infinite;
`;

export { Container, Dot1, Dot2, Dot3 };
