import styled from 'styled-components';
import { FaCommentDots } from 'react-icons/fa';

const Container = styled.div`
  width: var(--size-inner-max-width);
  height: calc(100vh - 240px);
  margin: 0 auto;
  padding: 10px;
  overflow-y: auto;
`;

const AuthorBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid #61646b;
    margin-right: 7px;
  }

  p {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  h6 {
    font-size: 11px;
    color: var(--color-gray-800);
  }
`;

const PostContent = styled.div`
  margin-bottom: 10px;
  h3 {
    font-size: 17px;
    margin-bottom: 10px;
  }

  p {
    font-size: 13px;
    line-height: 1.6;
    color: var(--color-gray-700);
    text-align: justify;
  }
`;

const CommentCount = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: var(--color-blue-600);
`;

const CommentIcon = styled(FaCommentDots)`
  font-size: 15px;
  margin-right: 3px;
`;

const Divider = styled.hr`
  margin: 15px 0;
  background: var(--color-gray-300);
  height: 1px;
  border: 0;
`;

export {
  Container,
  AuthorInfo,
  AuthorBox,
  PostContent,
  CommentCount,
  CommentIcon,
  Divider,
};
