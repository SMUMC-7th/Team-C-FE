import styled from 'styled-components';

const CommentInputBox = styled.div`
  display: flex;
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

  input {
    width: calc(100% - 40px); /* 좌우 마진(20px씩)을 제외한 너비 */
    max-width: 600px; /* 최대 너비 설정 */
    min-width: 300px; /* 최소 너비 설정 */
    height: 40px;
    padding: 0 15px;
    margin: 0 20px; /* 수평 중앙 정렬 */
    border: none;
    border-radius: 20px;
    background-color: #f1f1f1;
    font-size: 13px;
    box-sizing: border-box; /* padding과 border를 포함한 너비 계산 */

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
