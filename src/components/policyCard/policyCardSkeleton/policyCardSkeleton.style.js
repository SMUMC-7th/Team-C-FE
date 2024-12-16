import styled, { keyframes } from 'styled-components';

const skeleton = keyframes`
  0% {
    background-color: #c7c7c7;
  }
  25% {
    background-color: #e6e6e6;
  }
  50% {
    background-color: #f4f4f4;
  }
  85% {
    background-color: #e6e6e6;
  }
  100% {
    background-color: #c7c7c7;
  }
`;
const skeletonInner = keyframes`
  0% {
    background-color: #d9d9d9;
  }
  25% {
    background-color: #f8f8f8;
  }
  50% {
    background-color: #ffffff;
  }
  85% {
    background-color: #f8f8f8;
  }
  100% {
    background-color: #d9d9d9;
  }
`;
const Container = styled.div`
  display: flex;
  min-height: 156px;
  border-radius: 20px;
  align-items: center;
  width: 345px;
  justify-content: center;
  animation: ${skeleton} 1s ease-in infinite;
  gap: 10px;
`;
const Title = styled.div`
  width: 198px;
  height: 42px;
  border-radius: 10px;
  animation: ${skeletonInner} 1s ease-in infinite;
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Content1 = styled.div`
  width: 198px;
  height: 17px;
  border-radius: 10px;
  animation: ${skeletonInner} 1s ease-in infinite;
`;
const Content2 = styled.div`
  width: 163px;
  height: 17px;
  border-radius: 10px;
  animation: ${skeletonInner} 1s ease-in infinite;
`;
const Img = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  animation: ${skeletonInner} 1s ease-in infinite;
`;

export { Container, Title, Text, Content1, Content2, Img };
