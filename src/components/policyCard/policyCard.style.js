import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsBookmarkDash, BsBookmarkFill } from 'react-icons/bs';

const Container = styled.div`
  display: flex;
  min-height: 156px;
  background: linear-gradient(
    to top left,
    rgba(244, 244, 244, 0.1),
    rgba(116, 215, 216, 0.1),
    rgba(88, 139, 226, 0.05)
  );
  border-radius: 20px;
  align-items: center;
  width: 345px;
  justify-content: center;
  position: relative;
`;
const Card = styled(Link)`
  text-decoration: none;
  display: flex;
  min-height: 156px;
  justify-content: center;
  align-items: center;
`;
const BookmarkIcon = styled(BsBookmarkDash)`
  position: absolute;
  top: 10px;
  left: 10px;
  cursor: pointer;
  z-index: 1;
  color: var(--color-blue-700);
  width: 23px;
  height: 20px;
`;
const BookmarkFillIcon = styled(BsBookmarkFill)`
  position: absolute;
  top: 10px;
  left: 10px;
  cursor: pointer;
  z-index: 1;
  color: var(--color-blue-700);
  width: 23px;
  height: 20px;
`;
const Texts = styled.div`
  display: flex;
  width: 200px;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  margin-left: 10px;
  margin-top: 15px;
`;

const Title = styled.div`
  display: -webkit-box;
  font-size: 26px;
  color: var(--color-blue-700);
  font-weight: bold;
  word-break: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
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
`;

const Img = styled.div`
  display: flex;
  width: 123px;
  height: 123px;
  img {
    object-fit: cover;
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
