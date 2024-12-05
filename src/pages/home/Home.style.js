import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  height: calc(var(--vh, 1vh) * 100 - 190px);
  align-items: center;
  gap: 20px;
  width: 346px;
  overflow: hidden;
`;

const PolicyContainer = styled.div`
  flex: 1;
  overflow-y: scroll;
  width: 100%;
  max-height: 75%;
`;

const Title = styled.div`
  font-size: 22px;
  height: 25px;
  position: sticky;
  top: 0;
  background: linear-gradient(
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.7)
  );
  backdrop-filter: blur(4px);
  color: var(--color-gray-800);
  font-weight: bold;
  z-index: 3;
  margin-bottom: 10px;
`;
const Button = styled.button`
  padding: 10px;
  justify-self: center;
  display: flex;
  position: absolute;
  top: 165px;
  right: 10px;
  z-index: 100;
  border-radius: 5px;
  font-size: 10px;
`;
export { Container, PolicyContainer, Title, Button };
