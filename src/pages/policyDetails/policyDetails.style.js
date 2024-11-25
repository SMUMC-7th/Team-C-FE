import styled from 'styled-components';
import { BsBookmarkDash, BsBookmarkFill } from 'react-icons/bs';

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: calc(100vh - 190px);
  overflow-y: scroll;
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

const BookmarkIcon = styled(BsBookmarkDash)`
  position: absolute;
  top: 20px;
  right: 20px;
  height: 20px;
  width: 40px;
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
  width: 40px;
  cursor: pointer;
  z-index: 1;
  color: var(--color-blue-700);
  width: 25px;
  height: 25px;
`;
const Header = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Title = styled.div`
  display: flex;
  font-size: 26px;
  color: var(--color-blue-700);
  font-weight: bold;
  width: 85%;
`;

const Explain = styled.div`
  display: flex;
  font-size: 15px;
  font-weight: 600;
  padding: 20px 0;
  width: 100%;
  border-bottom: 1px solid var(--color-gray-300);
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  margin: 10px 0;
  width: 100%;
  justify-content: space-between;
`;
const Category = styled.div`
  display: flex;
  font-size: 15px;
  font-weight: 600;
  width: 25%;
  margin-left: 20px;
  line-height: 150%;
`;
const Data = styled.div`
  display: flex;
  width: 60%;
  font-size: 15px;
  font-weight: 600;
  margin-right: 20px;
  line-height: 150%;
  flex-wrap: wrap;
  word-break: break-all;
  white-space: pre-line;
`;

const Alert = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
`;
export {
  Container,
  Header,
  Title,
  Explain,
  Contents,
  Category,
  Content,
  Data,
  BookmarkFillIcon,
  BookmarkIcon,
  PolicyInfoCard,
  Alert,
};
