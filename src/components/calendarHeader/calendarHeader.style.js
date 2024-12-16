import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  justify-content: center;
  width: 250px;
  min-height: 40px;
  border-radius: 30px;
  background-color: var(--color-gray-50);
  position: relative;
  margin-top: 15px;
`;

const Title = styled.div`
  font-size: 20px;
  color: var(--color-gray-800);
  font-weight: 700;
  display: flex;
  min-width: 120px;
  align-items: center;
  justify-content: center;
`;

const Button = styled.div`
  margin: 0 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TodayButton = styled.button`
  position: absolute;
  right: -40px;
  top: 13px;
  font-size: 15px;
  padding: 0 5px;
  border-radius: 10px;
`;
export { Header, Title, Button, TodayButton };
