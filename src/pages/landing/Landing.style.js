import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  width: min(100vw, var(--size-max-width));
  background-color: var(--color-blue-700);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: white;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const Logo = styled.img`
  font-size: 40px;
  font-weight: 700;
  width: 160px;
`;

const Slogan = styled.p`
  font-size: 16px;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 300px;
  position: absolute;
  bottom: 60px;
  color: white;
  text-align: center;
`;

const LoginTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 14px;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid white;
    margin: 0 10px;
  }
`;

const LoginBtnContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

const LoginButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  padding: ${({ type }) => (type === 'naver' ? '10px 16px' : '10px')};
  background-color: ${({ type }) =>
    type === 'kakao'
      ? 'var(--color-kakao-yellow)'
      : type === 'naver'
        ? 'var(--color-naver-green)'
        : type === 'google'
          ? 'white'
          : 'transparent'};
  color: ${({ type }) => (type === 'naver' ? 'white' : '#000000')};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const GuestLogin = styled(Link)`
  width: 100%;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  border: 1px solid white;
  border-radius: 5px;
`;

export {
  Container,
  LogoContainer,
  Logo,
  Slogan,
  LoginContainer,
  LoginTitle,
  LoginBtnContainer,
  LoginButton,
  GuestLogin,
};
