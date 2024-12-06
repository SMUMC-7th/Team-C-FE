import styled from 'styled-components';

const BottomNav = styled.nav`
  max-width: var(--size-max-width);
  width: 100%;
  height: var(--size-navbar);
  overflow: hidden;
  position: fixed;
  bottom: 0;
  margin-left: calc(-1 * var(--size-side-gap));
  background-color: white;
  box-shadow: 0 -5px 10px -5px rgba(0, 0, 0, 0.1);
`;

const NavDiv = styled.div`
  padding: 14px;
  display: flex;
  justify-content: space-between;
`;

const NavItem = styled.div`
  width: 52px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  color: ${(props) =>
    props.selected ? 'var(--color-blue-700)' : 'var(--color-gray-700)'};
  cursor: pointer;

  svg {
    width: 1.6rem;
    height: 1.6rem;
  }

  span {
    white-space: nowrap;
    font-size: 14px;
  }
`;

export { BottomNav, NavDiv, NavItem };
