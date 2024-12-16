import styled from 'styled-components';
import { FaCommentDots } from 'react-icons/fa';

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 30px;

  h2 {
    border-bottom: 1.5px solid #ddd;
    padding-bottom: 10px;
    font-size: 20px;

    display: flex;
    align-items: center;
    gap: 2px;
    cursor: pointer;
  }
`;

const PostItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  border-bottom: 1.5px solid #ddd;
  cursor: pointer;
  gap: 10px;

  h3 {
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    font-size: 12px;
    color: var(--color-gray-700);

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    display: flex;
    align-items: center;
    font-size: 13px;
    color: var(--color-blue-600);
  }
`;

const CommentIcon = styled(FaCommentDots)`
  width: 15px;
  height: 15px;
  margin-right: 3px;
`;

export { BoardContainer, PostItem, CommentIcon };
