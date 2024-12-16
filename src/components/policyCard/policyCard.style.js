import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsBookmarkDash, BsBookmarkFill } from 'react-icons/bs';

const Container = styled.div`
  display: flex;
  min-height: 156px;
  background: ${(props) =>
    props.canApply
      ? 'linear-gradient(to top left, rgba(244, 244, 244, 0.1), rgba(116, 215, 216, 0.1), rgba(88, 139, 226, 0.05))'
      : 'linear-gradient(to top right, rgba(178, 178, 178, 0.15), rgba(96, 99, 106, 0.2), rgba(83, 86, 93, 0.25))'};

  border-radius: 20px;
  align-items: center;
  max-width: var(--size-inner-max-width);
  min-width: var(--size-min-width);
  justify-content: center;
  position: relative;
`;
const Card = styled(Link)`
  text-decoration: none;
  display: flex;
  min-height: 156px;
  min-width: var(--size-min-width);
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;
const BookmarkIcon = styled(BsBookmarkDash)`
  position: absolute;
  top: 11px;
  left: 13px;
  cursor: pointer;
  z-index: 1;
  color: ${(props) =>
    props.canApply ? 'var(--color-blue-700)' : 'var(--color-gray-800)'};
  font-weight: bold;
  width: 23px;
  height: 20px;
`;
const BookmarkFillIcon = styled(BsBookmarkFill)`
  position: absolute;
  top: 11px;
  left: 13px;
  cursor: pointer;
  z-index: 1;
  color: ${(props) =>
    props.canApply ? 'var(--color-blue-700)' : 'var(--color-gray-800)'};
  width: 23px;
  height: 20px;
`;
const Texts = styled.div`
  display: flex;
  width: 60%;
  max-width: 400px;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  margin-top: 15px;
  margin-right: 10px;
`;

const Title = styled.div`
  display: -webkit-box;
  font-size: 23px;
  color: ${(props) =>
    props.canApply ? 'var(--color-blue-700)' : 'var(--color-gray-800)'};
  font-weight: bold;
  word-break: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

const Content = styled.div`
  display: -webkit-box;
  font-size: 15px;
  word-break: break-word;
  font-weight: bold;
  color: #000000;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 200px;
  margin-top: 5px;
`;

const Img = styled.div`
  display: flex;
  min-width: 123px;
  height: 123px;

  img {
    object-fit: cover;
    opacity: ${(props) => (props.canApply ? '1' : '0.65')};
  }
`;
export {
  Container,
  Texts,
  Title,
  Content,
  Img,
  BookmarkIcon,
  BookmarkFillIcon,
  Card,
};
