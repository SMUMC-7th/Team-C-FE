import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  gap: 20px;
  transform: translateX(20px);
  width: 345px;
  overflow: hidden;
  margin-left: calc(-1 * var(--size-side-gap));
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

export { Container, PolicyContainer, Title };
