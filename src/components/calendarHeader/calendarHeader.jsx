import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { format } from 'date-fns';
import * as S from './calendarHeader.style';

const CalendarHeader = ({
  currentDate,
  prevMonth,
  nextMonth,
  handleMoveToToday,
}) => {
  return (
    <S.Header>
      <S.Button onClick={prevMonth}>
        <IoIosArrowDown size={24} color="var(--color-gray-700)" />
      </S.Button>
      <S.Title onClick={handleMoveToToday}>
        {format(currentDate, 'yyyy')}년 {format(currentDate, 'M')}월
      </S.Title>
      <S.Button onClick={nextMonth}>
        <IoIosArrowUp size={24} color="var(--color-gray-700)" />
      </S.Button>
    </S.Header>
  );
};

export default CalendarHeader;
