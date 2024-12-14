import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: var(--size-max-width);
  height: 100vh;
  padding: 0;
  margin: 0;
  justify-content: center;
  background-color: rgb(255, 255, 255);
  opacity: 100%;
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

const Header = styled.header`
  width: 100%;
  height: var(--size-header);
  background-color: white;
  overflow: hidden;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: end;
`;

const Nav = styled.nav`
  width: var(--size-max-width);
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-gray-300);
  position: relative;
  align-self: center;
  svg {
    margin-left: 10px;
    width: 28px;
    height: 28px;
    color: var(--color-gray-600);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-self: center;
`;

export { Container, Text, Header, Nav, Content };
