import styled from 'styled-components';
import { BsBookmarkDash, BsBookmarkFill } from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 8px;
`;

const BookmarkList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 28px;
`;

const BookmarkPolicy = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: var(--color-gray-50);
  border-radius: 10px;
`;

const BookmarkTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const PolicyTitle = styled.p`
  width: 210px;
  font-size: 20px;
  color: var(--color-gray-700);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BookmarkIcon = styled(BsBookmarkDash)`
  color: var(--color-blue-700);
  width: 22px;
  height: 25px;
`;

const BookmarkFillIcon = styled(BsBookmarkFill)`
  color: var(--color-blue-700);
  width: 22px;
  height: 25px;
`;

const ArrowIcon = styled(IoIosArrowForward)`
  size: 2rem;
  color: var(--color-gray-700);
`;

export {
  Container,
  Title,
  BookmarkList,
  BookmarkPolicy,
  BookmarkTitle,
  PolicyTitle,
  BookmarkIcon,
  BookmarkFillIcon,
  ArrowIcon,
};
