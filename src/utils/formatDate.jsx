import { format } from 'date-fns';

// 날짜 범위 포맷
export const formatDateRange = (start, end) => {
  if (start != null && end != null) {
    return (
      <>
        {format(new Date(start), 'yyyy년 M월 d일')}
        <br />~ {format(new Date(end), 'yyyy년 M월 d일')}
      </>
    );
  } else if (end != null) {
    return <>{format(new Date(end), 'yyyy년 M월 d일')}</>;
  }
};

// 날짜를 Date 객체로 변환하는 유틸리티 함수
const parseDate = (dateStr) => {
  const dateParts = dateStr.split(/[.-\s]/); // 구분자에 따라 날짜를 나눔
  // Date 객체 생성: 연도, 월(0부터 시작), 일
  return new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
};

// 날짜 추출 API
export function extractDatesAPIVer(input) {
  const dateRegex = /\d{4}[-.\s]?\d{1,2}[-.\s]?\d{1,2}/g; // 날짜 형식에 맞는 정규식
  const matches = input.match(dateRegex);

  if (matches) {
    if (matches.length === 2) {
      return { start: matches[0], end: matches[1] };
    } else if (matches.length === 1) {
      return { start: null, end: matches[0] };
    } else if (matches.length > 2) {
      return { start: matches[0], end: matches[1] };
    }
  }
  return { start: null, end: null };
}

// 날짜 추출 함수
export function extractDates(input) {
  const dateRegex = /\d{4}[-.\s]?\d{1,2}[-.\s]?\d{1,2}/g; // 날짜 형식에 맞는 정규식
  const matches = input.match(dateRegex);

  if (input.includes('상시')) {
    return '상시';
  }

  if (matches) {
    if (matches.length === 2) {
      const startDate = parseDate(matches[0]);
      const endDate = parseDate(matches[1]);
      return formatDateRange(startDate, endDate);
    } else if (matches.length === 1) {
      const endDate = parseDate(matches[0]);
      return formatDateRange(null, endDate);
    } else if (matches.length > 2) {
      const startDate = parseDate(matches[0]);
      const endDate = parseDate(matches[1]);
      return formatDateRange(startDate, endDate);
    }
  }
  return input.trim();
}

// 현재 날짜와 비교하여 적용 가능 여부 확인
export function canApplyNow(input) {
  const today = new Date();
  const dateRegex = /\d{4}[-.]\d{2}[-.]\d{2}/g; // 날짜 형식에 맞는 정규식
  const matches = input.match(dateRegex);

  if (input.includes('상시')) {
    return true;
  }

  if (matches) {
    if (matches.length === 2) {
      const endDate = parseDate(matches[1]);
      return endDate > today;
    } else if (matches.length === 1) {
      const endDate = parseDate(matches[0]);
      return endDate > today;
    } else if (matches.length > 2) {
      const endDate = parseDate(matches[1]);
      return endDate >= today;
    }
  }
  return true;
}
