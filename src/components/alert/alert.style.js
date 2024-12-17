import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  position: fixed;
  bottom: 100px;
  align-self: center;
  justify-content: center;
  z-index: 1;
`;

const Alert = styled.div`
  background-color: rgba(97, 100, 107, 0.6);
  padding: 2px 8px;
  height: 25px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export { Container, Alert };
