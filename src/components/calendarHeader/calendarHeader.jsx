import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { format } from 'date-fns';
import * as S from './calendarHeader.style';

const CalendarHeader = ({
  currentDate,
  prevMonth,
  nextMonth,
  setCurrentDate,
  setSelectDate,
}) => {
  const today = new Date();
  const formatToday = today;

  const handleMoveToToday = () => {
    setCurrentDate(formatToday);
    setSelectDate(format(formatToday, 'yyyy-MM-dd'));
    console.log(formatToday);
  };
  return (
    <S.Header>
      <S.Button onClick={prevMonth}>
        <IoIosArrowDown size={24} color="var(--color-gray-700)" />
      </S.Button>
      <S.Title>
        {format(currentDate, 'yyyy')}년 {format(currentDate, 'M')}월
      </S.Title>
      <S.Button onClick={nextMonth}>
        <IoIosArrowUp size={24} color="var(--color-gray-700)" />
      </S.Button>
      <S.TodayButton onClick={handleMoveToToday}>오늘</S.TodayButton>
    </S.Header>
  );
};

export default CalendarHeader;
