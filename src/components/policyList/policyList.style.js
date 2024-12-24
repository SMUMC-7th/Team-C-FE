import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
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
  width: 100%;
  min-width: var(--size-min-width);
`;

const Alert = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  gap: 10px;
`;

const Ref = styled.div`
  height: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export { Container, Title, PolicyList, Alert, Ref };
