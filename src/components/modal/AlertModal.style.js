import { styled } from 'styled-components';
import { IoIosClose } from 'react-icons/io';

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
  padding: 14px 14px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CloseContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

const CloseBtn = styled(IoIosClose)`
  width: 30px;
  height: 30px;
  color: var(--color-gray-800);
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 20px 20px;
`;

const AlertImg = styled.img`
  width: 170px;
  height: 170px;
`;

const Content = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export {
  ModalContainer,
  ModalContent,
  CloseContainer,
  CloseBtn,
  ContentContainer,
  AlertImg,
  Content,
};
