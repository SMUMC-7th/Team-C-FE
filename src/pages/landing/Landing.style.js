import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 100vh;
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
  bottom: 30px;
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

const KakaoLoginButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: var(--color-kakao-yellow);
  color: #000000;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;

  svg {
    margin-right: 4px;
  }
`;

const GuestLogin = styled(Link)`
  width: 100%;
  font-size: 14px;
  color: white;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
`;

export {
  Container,
  LogoContainer,
  Logo,
  Slogan,
  LoginContainer,
  LoginTitle,
  KakaoLoginButton,
  GuestLogin,
};
