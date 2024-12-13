import styled from 'styled-components';
import { BsBookmarkDash, BsBookmarkFill } from 'react-icons/bs';

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: calc(var(--vh, 1vh) * 100 - 190px);
  overflow-y: scroll;
  max-width: 345px;
`;

const PolicyInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background: linear-gradient(
    to top left,
    rgba(244, 244, 244, 0.1) -10%,
    rgba(116, 215, 216, 0.1) 11%,
    rgba(88, 139, 226, 0.1) 100%
  );
  width: 100%;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Row = styled.tr``;

const CategoryHeader = styled.th`
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  padding: 10px 20px;
  background-color: var(--color-gray-300);
`;

const Category = styled.td`
  font-size: 15px;
  font-weight: 600;
  margin: 20px 5px 10px 20px;
  width: 90px;
  display: flex;
  flex-wrap: wrap;
  word-break: keep-all;
`;

const Data = styled.td`
  font-size: 15px;
  padding: 10px 20px;
  padding-top: 20px;
  font-weight: 200;
  word-break: break-word;
  white-space: pre-wrap;
  border-left: solid 1px var(--color-gray-300);
`;

const BookmarkIcon = styled(BsBookmarkDash)`
  position: absolute;
  top: 20px;
  right: 20px;
  height: 20px;
  cursor: pointer;
  z-index: 1;
  color: var(--color-blue-700);
  width: 25px;
  height: 25px;
`;
const BookmarkFillIcon = styled(BsBookmarkFill)`
  position: absolute;
  top: 20px;
  right: 20px;
  height: 20px;
  cursor: pointer;
  z-index: 1;
  color: var(--color-blue-700);
  width: 25px;
  height: 25px;
`;

const Header = styled.div`
  margin-top: 20px;
  margin-right: 20px;
  margin-left: 20px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Title = styled.div`
  font-size: 26px;
  color: var(--color-blue-700);
  font-weight: bold;
  width: 85%;
`;

const Explain = styled.div`
  font-size: 15px;
  font-weight: 600;
  padding: 20px 0;
  width: 100%;
  border-bottom: 1px solid var(--color-gray-300);
`;

export {
  Container,
  Header,
  Title,
  Explain,
  Table,
  Row,
  CategoryHeader,
  Category,
  Data,
  BookmarkFillIcon,
  BookmarkIcon,
  PolicyInfoCard,
};
