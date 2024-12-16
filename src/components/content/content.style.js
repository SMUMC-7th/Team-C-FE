import styled from 'styled-components';
import { RiArrowRightWideLine } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Container = styled.div`
  display: flex;
  width: 319px;
  height: 40px;
  gap: 10px;
  align-items: center;
`;

const Button = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: ${(props) =>
    props.checked ? 'none' : '1px dotted rgba(0, 0, 0, 0.3)'};
  background-color: ${(props) =>
    props.checked ? 'var(--color-blue-700)' : 'white'};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Policy = styled(Link)`
  display: flex;
  background-color: white;
  width: 277px;
  height: 40px;
  border-radius: 8px;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
`;

const Title = styled.div`
  font-size: 22px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 231px;
  font-weight: 600;
  color: var(--color-gray-700);
  margin-left: 20px;
`;

const StyledIcon = styled(RiArrowRightWideLine)`
  font-size: 20px;
  margin-right: 10px;
  color: var(--color-gray-700);
`;

const CheckImg = styled(FaCheck)`
  color: white;
  z-index: 1;
  position: absolute;
`;

export { Container, Button, Policy, Title, StyledIcon, CheckImg };
