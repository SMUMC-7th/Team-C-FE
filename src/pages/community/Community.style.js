import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';

const Container = styled.div`
  width: var(--size-inner-max-width);
  height: calc(100vh - 180px);
  margin: 0 auto;
  padding: 10px;
  overflow-y: auto;
`;

const SearchContainer = styled.div`
  position: relative;
  padding-bottom: 15px;
  display: flex;
  justify-content: center;

  input {
    width: 100%;
    padding: 8px 13px;
    background-color: #eee;
    border: none;
    border-radius: 25px;
    outline: none;

    &:focus {
      border: 1.5px solid #aaa;
    }
  }
`;

const SearchIcon = styled(IoSearch)`
  position: absolute;
  right: 10px;
  top: 35%;
  transform: translateY(-50%);
  color: #888;
  font-size: 20px;
`;

const WriteButton = styled.div`
  position: fixed;
  left: 50%;
  bottom: 19%;
  transform: translate(-50%, 50%);

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;

    width: 90px;
    height: 35px;
    border-radius: 20px;
    font-size: 15px;
    cursor: pointer;
    background-color: #ddd;
    color: var(--color-gray-main);

    &:hover {
      background-color: #ccc;
    }
  }
`;

export { Container, SearchContainer, SearchIcon, WriteButton };
