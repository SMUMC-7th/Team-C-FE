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
  flex-direction: column;
  width: 100%;
  height: 68px;
  max-width: var(--size-inner-max-width);
  min-width: var(--size-min-width);
  gap: 8px;
  padding: 5px;
  border-bottom: 1px solid var(--color-gray-300);
  justify-content: center;
  animation: ${skeleton} 1s ease-in infinite;
  border-radius: 10px;
`;
const Title = styled.div`
  display: flex;
  width: 50%;
  height: 20px;
  font-size: 15px;
  font-weight: bold;
  animation: ${skeletonInner} 1s ease-in infinite;
  border-radius: 10px;
`;
const Content = styled.div`
  display: inline-block;
  width: 100%;
  height: 13px;
  border-radius: 10px;
  animation: ${skeletonInner} 1s ease-in infinite;
`;

export { Container, Title, Content };
