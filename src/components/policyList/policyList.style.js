import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 150px;
  gap: 10px;
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
`;

const PolicyList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 345px;
`;

const Alert = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
`;

export { Container, Title, PolicyList, Alert };
