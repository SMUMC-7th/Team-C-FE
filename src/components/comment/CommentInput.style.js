import styled from 'styled-components';

const CommentInputBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
  width: 100%;
  position: fixed;
  left: 50%;
  bottom: 16%;
  transform: translate(-50%, 50%);
`;

const CommentInput = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  min-width: 300px;
  padding: 0 10px;

  input {
    width: 100%;
    height: 40px;
    padding: 0 15px;
    border: none;
    border-radius: 20px;
    background-color: #f1f1f1;
    font-size: 13px;
    box-sizing: border-box;

    &:focus {
      border: 1px solid #888;
      outline: none;
    }
  }

  svg {
    position: absolute;
    right: 30px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    font-size: 20px;
    color: var(--color-gray-600);
  }
`;

export { CommentInputBox, CommentInput };
