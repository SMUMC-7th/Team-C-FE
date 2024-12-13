import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: var(--size-inner-max-width);
  height: calc(var(--vh, 1vh) * 100 - 190px);
  justify-content: center;
  align-items: center;
  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
  }
`;

const Text = styled.div`
  display: flex;
  color: #61646b;
  font-size: 16px;
  text-align: center;
`;

export { Container, Text };
