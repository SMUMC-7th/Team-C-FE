import styled from 'styled-components';

const Layout = styled.div`
  margin: 100px auto;
  gap: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40px;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  width: 250px;
  min-height: 40px;
  border-radius: 30px;
  background-color: var(--color-gray-50);
`;

const Title = styled.div`
  font-size: 20px;
  color: var(--color-gray-800);
  font-weight: 700;
  display: flex;
  min-width: 120px;
  align-items: center;
  justify-content: center;
`;

const Button = styled.div`
  margin: 0 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Layout, Header, Title, Button };
