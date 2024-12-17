import styled from 'styled-components';

const CommentInputBox = styled.div`
  display: flex;
  margin: 10px 0;
  position: fixed;
  left: 50%;
  bottom: 16%;
  transform: translate(-50%, 50%);
`;

const CommentInput = styled.div`
  position: relative;

  input {
    width: 350px;
    height: 40px;
    padding: 0 15px;
    border: none;
    border-radius: 20px;
    background-color: #f1f1f1;
    font-size: 13px;

    &:focus {
      border: 1px solid #888;
      outline: none;
    }
  }

  svg {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    font-size: 20px;
    color: var(--color-gray-600);
  }
`;

export { CommentInputBox, CommentInput };
