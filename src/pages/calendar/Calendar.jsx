import { useContext, useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
} from 'date-fns';

import * as S from './Calendar.style';

import CalendarHeader from '../../components/calendarHeader/calendarHeader';
import Day from '../../components/day/day';

import { getMonthBookmark } from '../../apis/bookmark';
import { updateVh } from '../../utils/calculateVH';
import { LoginContext } from '../../context/LoginContext';
import Portal from '../../components/Portal';
import ContentModal from '../../components/modal/ContentModal';

const weekDays = ['일', '월', '화', '수', '목', '금', '토'];

const Calendar = () => {
  const { isLogin } = useContext(LoginContext);
  const nowToday = new Date();
  const [isModalOpen, setIsModalOpen] = useState(false);
  updateVh();
  window.addEventListener('resize', updateVh);

  useEffect(() => {
    if (!isLogin) {
      setIsModalOpen(true);
    }
  }, [isLogin]);

  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);
  const [selectDate, setSelectDate] = useState(format(today, 'yyyy-MM-dd'));

  const {
    data: MonthBookmark,
    error: MonthBookmarkError,
    isLoading: MonthBookmarkLoading,
  } = useQuery({
    queryKey: ['calendar', currentDate.getMonth()],
    queryFn: () =>
      getMonthBookmark(currentDate.getFullYear(), currentDate.getMonth() + 1),
    enabled: !!isLogin,
  });

  const policies = Array.isArray(MonthBookmark?.data?.bookmarks)
    ? MonthBookmark?.data?.bookmarks
    : [];

  const getMonthDates = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    return { monthStart, monthEnd, startDate, endDate };
  };

  const { monthStart, monthEnd, startDate, endDate } = getMonthDates();

  const handleSelectDate = (DateData) => {
    setSelectDate(DateData);
  };

  const generateCalendarDays = () => {
    const days = [];
    let day = startDate;

    while (day <= endDate) {
      const week = [];

      for (let i = 0; i < 7; i++) {
        const isCurrentMonth = day >= monthStart && day <= monthEnd;
        const editDay = format(day, 'yyyy-MM-dd');
        const isSelectedDay = editDay === selectDate;
        week.push(
          <S.Day
            key={editDay}
            selected={isSelectedDay}
            onClick={isCurrentMonth ? () => handleSelectDate(editDay) : null}
            style={{
              backgroundColor: isCurrentMonth ? null : 'var(--color-gray-50)',
            }}
          >
            {isCurrentMonth ? (
              <>
                <S.DaySpan selected={isSelectedDay}>
                  {format(day, 'd')}
                </S.DaySpan>
                <S.DayPolicyList>
                  {policies.map((policy, index) =>
                    policy.startDate === editDay ? (
                      <S.DayPolicy
                        key={`${policy.bizId}_${policy.startDate}_${index}`}
                      >
                        <S.ArrowForwardIcon
                          size={10}
                          selected={isSelectedDay}
                        />
                        <S.DayPolicyText
                          $started={true}
                          selected={isSelectedDay}
                        >
                          {policy.name}
                        </S.DayPolicyText>
                      </S.DayPolicy>
                    ) : policy.endDate === editDay ? (
                      <S.DayPolicy
                        key={`${policy.bizId}_${policy.endDate}_${index}`}
                      >
                        <S.ArrowBackIcon selected={isSelectedDay} />
                        <S.DayPolicyText
                          $started={false}
                          selected={isSelectedDay}
                        >
                          {policy.name}
                        </S.DayPolicyText>
                      </S.DayPolicy>
                    ) : null
                  )}
                </S.DayPolicyList>
              </>
            ) : null}
          </S.Day>
        );

        day = addDays(day, 1);
      }

      days.push(<S.DayBox key={day.toDateString()}>{week}</S.DayBox>);
    }

    return days;
  };

  const prevMonth = () => {
    const newDate = subMonths(currentDate, 1);
    setCurrentDate(newDate);
    setSelectDate(format(startOfMonth(newDate), 'yyyy-MM-dd'));
  };

  const nextMonth = () => {
    const newDate = addMonths(currentDate, 1);
    setCurrentDate(newDate);
    setSelectDate(format(startOfMonth(newDate), 'yyyy-MM-dd'));
  };

  const handleMoveToToday = () => {
    setCurrentDate(nowToday);
    setSelectDate(format(nowToday, 'yyyy-MM-dd'));
  };

  return (
    <>
      <S.Layout>
        <CalendarHeader
          currentDate={currentDate}
          prevMonth={prevMonth}
          nextMonth={nextMonth}
          setCurrentDate={setCurrentDate}
          setSelectDate={setSelectDate}
          handleMoveToToday={handleMoveToToday}
        />
        <S.CalendarBox>
          <S.WeekLayout>
            {weekDays.map((day, index) => (
              <S.Week key={index}>{day}</S.Week>
            ))}
          </S.WeekLayout>
          <S.DayLayout>{generateCalendarDays()}</S.DayLayout>
        </S.CalendarBox>
        {selectDate && <Day day={selectDate} {...policies} />}
      </S.Layout>
      {format(nowToday, 'yyyy-MM-dd') != selectDate && (
        <S.TodayButton onClick={handleMoveToToday}>
          {'< '}
          <S.TodayButtonSpan>TODAY</S.TodayButtonSpan>
        </S.TodayButton>
      )}

      {isModalOpen && (
        <Portal>
          <ContentModal
            title="로그인하시겠습니까?"
            message="로그인이 필요한 서비스입니다."
            btnText1="로그인"
            btnText2="닫기"
            onBtn1Click={() => (window.location.href = '/')}
            onBtn2Click={() => {
              window.location.href = '/home';
              setIsModalOpen(false);
            }}
          ></ContentModal>
        </Portal>
      )}
    </>
  );
};

export default Calendar;
