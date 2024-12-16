import styled from 'styled-components';

const WriteContainer = styled.div`
  width: var(--size-inner-max-width);
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px 0;

  input {
    width: 100%;
    height: 45px;
    outline: none;
    border: none;
    border-radius: 10px;
    background-color: var(--color-gray-50);
    padding: 0 10px;
  }

  textarea {
    width: 100%;
    height: 400px;
    outline: none;
    border: none;
    border-radius: 10px;
    background-color: var(--color-gray-50);
    padding: 10px;
    resize: none;
  }
`;

const UploadButton = styled.div`
  position: fixed;
  left: 50%;
  bottom: 19%;
  transform: translate(-50%, 50%);

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;

    width: 90px;
    height: 35px;
    border-radius: 20px;
    font-size: 15px;
    cursor: pointer;
    background-color: #ddd;
    color: var(--color-gray-main);

    &:hover {
      background-color: #ccc;
    }
  }
`;

export { WriteContainer, UploadButton };
