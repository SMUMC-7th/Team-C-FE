import styled from 'styled-components';
import { BsThreeDotsVertical } from 'react-icons/bs';

const MenuContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const MenuIcon = styled(BsThreeDotsVertical)`
  cursor: pointer;
  color: var(--color-gray-600);
  margin-top: 5px;
`;

const Menu = styled.div`
  width: 80px;
  position: absolute;
  top: 0px;
  right: 15px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

const MenuItem1 = styled.div`
  font-size: 13px;
  padding: 5px 16px;
  cursor: pointer;
  border-bottom: 1px solid #f0f0f0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  &:hover {
    background-color: var(--color-gray-100);
  }
`;

const MenuItem2 = styled.div`
  font-size: 13px;
  padding: 5px 16px;
  cursor: pointer;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  &:hover {
    background-color: var(--color-gray-100);
  }
`;

export { MenuContainer, MenuIcon, Menu, MenuItem1, MenuItem2 };
