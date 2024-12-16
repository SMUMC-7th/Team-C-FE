import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px solid var(--color-gray-300);
`;

const Box = styled.div`
  width: 100%;
  background-color: var(--color-gray-50);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
`;

const InfoContainer = styled.div`
  width: 100%;
  padding: 18px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid var(--color-gray-300);
`;

const ProfileImg = styled.img`
  width: 80px;
  height: 80px;
  border: 1px solid var(--color-gray-600);
  border-radius: 40px;
`;

const NickName = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: var(--color-gray-900);
`;

const AgeEducation = styled.p`
  font-size: 16px;
  color: var(--color-gray-700);
`;

const ModifyBox = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const ModifyBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-gray-600);
  text-decoration: none;
  padding-right: 10px;
`;

export {
  Container,
  Box,
  InfoContainer,
  ProfileImg,
  NickName,
  AgeEducation,
  ModifyBox,
  ModifyBtn,
};
