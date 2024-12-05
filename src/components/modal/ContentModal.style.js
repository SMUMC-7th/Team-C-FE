import { styled } from 'styled-components';

const ModalContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const ModalContent = styled.div`
  background-color: white;
  width: 300px;
  padding: 30px 40px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const ModalTitle = styled.h2`
  font-size: 20px;
  color: var(--color-gray-900);
`;

const Message = styled.p`
  font-size: 12px;
  color: var(--color-gray-700);
`;

const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const BlueBtn = styled.button`
  width: 100%;
  height: 40px;
  background-color: var(--color-blue-700);
  color: white;
  font-size: 16px;
  border-radius: 10px;
`;

const DefaultBtn = styled.button`
  width: 100%;
  height: 40px;
  background-color: white;
  border: 1px solid var(--color-gray-100);
  color: var(--color-gray-700);
  font-size: 16px;
  border-radius: 10px;
`;

export {
  ModalContainer,
  ModalContent,
  ModalTitle,
  Message,
  BtnContainer,
  BlueBtn,
  DefaultBtn,
};
