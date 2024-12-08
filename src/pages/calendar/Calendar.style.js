import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

const Layout = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(var(--vh, 1vh) * 100 - 190px);
  overflow-y: scroll;
  position: relative;
`;

const Title = styled.div`
  font-size: 20px;
  color: #000;
  font-weight: 700;
  display: flex;
  align-items: center;
`;

const Button = styled.div`
  margin: 0 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CalendarBox = styled.div`
  background-color: var(--color-gray-50);
  width: 345px;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 9px;
  border-radius: 13px;
`;

const WeekLayout = styled.div`
  margin-top: 9px;
  display: flex;
  width: 320px;
  height: 22px;
  gap: 9px;
  justify-content: center;
`;

const Week = styled.div`
  width: 38px;
  height: 22px;
  color: black;
  display: flex;
  justify-content: center;
  border-radius: 30px;
  background-color: white;
  align-items: center;
  font-size: 13px;
`;

const DayLayout = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
`;

const DayBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 9px;
`;

const Day = styled.div`
  width: 38px;
  height: 51px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid #61646b;
  /* background-color: ${(props) =>
    props.selected ? 'var(--color-gray-500)' : 'white'}; */
  align-items: center;
  border: ${(props) => (props.selected ? '1px solid #61646b' : 'none')};
  align-items: center;
  border-radius: 5px;
  font-size: 11px;
  position: relative;
  box-shadow: ${(props) =>
    props.selected ? '  0px 2px 5px 0px rgba(0, 0, 0, 0.25)' : 'none'};
`;

const DaySpan = styled.span`
  position: relative;
  font-weight: 700;
  margin-top: 2px;
  color: black;
  /* color: ${(props) => (props.selected ? 'white' : 'black')}; */
`;

const DayPolicy = styled.div`
  display: flex;
  margin-bottom: 4px;
  width: 30px;
  justify-content: center;
  align-items: center;
`;

const DayPolicyList = styled.div`
  max-height: 34px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
  overflow: hidden;
  position: absolute;
  bottom: 0;
`;

const DayPolicyText = styled.div`
  font-size: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 24px;
  color: ${(props) =>
    props.isSelected
      ? props.$started
        ? 'var(--color-blue-900)'
        : 'var(--color-red-900)'
      : props.$started
        ? 'var(--color-blue-800)'
        : 'var(--color-red-800)'};
`;

const ArrowBackIcon = styled(IoIosArrowBack)`
  width: 7px;
  stroke-width: 25px;
  color: ${(props) =>
    props.isSelected ? 'var(--color-red-900)' : 'var(--color-red-800)'};
`;

const ArrowForwardIcon = styled(IoIosArrowForward)`
  width: 7px;
  stroke-width: 25px;
  color: ${(props) =>
    props.isSelected ? 'var(--color-blue-900)' : 'var(--color-blue-800)'};
`;

export {
  Layout,
  Title,
  Button,
  CalendarBox,
  WeekLayout,
  Week,
  DayLayout,
  DayBox,
  Day,
  DaySpan,
  DayPolicy,
  DayPolicyList,
  DayPolicyText,
  ArrowForwardIcon,
  ArrowBackIcon,
};
