import * as S from './day.style';
import { format } from 'date-fns';
import Content from '../content/content';
import { useQuery } from '@tanstack/react-query';
import { useContext, useState } from 'react';
import { getDayBookmark } from '../../apis/bookmark';
import { LoginContext } from '../../context/LoginContext';

const Day = (props) => {
  const { day, checked, ...policies } = props;
  const dateObj = new Date(day);
  const selectedYear = dateObj.getFullYear();
  const selectedMonth = dateObj.getMonth() + 1;
  const selectedDay = dateObj.getDate();
  const { isLogin } = useContext(LoginContext);
  const {
    data: DayBookmark,
    error: DayBookmarkError,
    isLoading: DayBookmarkLoading,
  } = useQuery({
    queryKey: ['bookmark', selectedYear, selectedMonth, selectedDay],
    queryFn: () => getDayBookmark(selectedYear, selectedMonth, selectedDay),
    enabled: !!isLogin,
  });
  return (
    <S.Container>
      <S.Date>{format(day, 'd')}일</S.Date>
      <S.Contents>
        <S.Contents>
          {DayBookmark?.data?.bookmarks &&
          DayBookmark?.data?.bookmarks.length > 0 ? (
            DayBookmark?.data?.bookmarks.map((policy) => {
              return (
                <Content
                  key={policy?.srchPolicyId}
                  {...policy}
                  checked={false}
                />
              );
            })
          ) : (
            <></>
          )}
        </S.Contents>
      </S.Contents>
    </S.Container>
  );
};

export default Day;
