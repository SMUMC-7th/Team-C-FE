import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.header`
  max-width: var(--size-max-width);
  width: 100%;
  height: var(--size-header);
  overflow: hidden;
  position: fixed;
  top: 0;
  margin-left: calc(-1 * var(--size-side-gap));
  display: flex;
  justify-content: center;
  align-items: end;
  padding: 0 var(--size-side-gap);

  svg {
    width: 28px;
    height: 28px;
    color: var(--color-gray-600);
  }
`;

const Nav = styled.nav`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-gray-300);
  position: relative;

  svg {
    position: absolute;
  }
`;

const Profile = styled.div`
  width: 28px;
  height: 28px;
  position: absolute;
  right: 10px;
`;

const UserImg = styled.img`
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  border: 1px solid var(--color-gray-400);
  border-radius: 14px;
`;

const Logo = styled.img`
  width: 100px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export { Header, Nav, Logo, Profile, UserImg };
