import styled from 'styled-components';

const ProfileContainer = styled.div`
  width: 66px;
  height: 66px;
  position: relative;
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 33px;
  object-fit: cover;
`;

const EditButton = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: var(--color-blue-700);
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    color: white;
    width: 13px;
    height: 13px;
  }
`;

export { ProfileContainer, ProfileImg, EditButton };
