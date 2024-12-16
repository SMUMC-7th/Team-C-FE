import { format } from 'date-fns';

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

export function extractDatesAPIVer(input) {
  const dateRegex = /\d{4}\s*[.-]\s*\d{1,2}\s*[.-]?\s*\d{1,2}/g;
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

export function extractDates(input) {
  const dateRegex = /\d{4}\s*[.-]\s*\d{1,2}\s*[.-]?\s*\d{1,2}/g;
  const matches = input.match(dateRegex);
  if (input.includes('상시')) {
    return '상시';
  }
  if (matches) {
    if (matches.length === 2) {
      return formatDateRange(matches[0], matches[1]);
    } else if (matches.length === 1) {
      return formatDateRange(null, matches[0]);
    } else if (matches.length > 2) {
      return formatDateRange(matches[0], matches[1]);
    }
  }
  return input.trim();
}

export function canApplyNow(input) {
  const today = new Date();
  const dateRegex = /\d{4}[-.]\d{2}[-.]\d{2}/g;
  const matches = input.match(dateRegex);

  if (input.includes('상시')) {
    return true;
  }
  if (matches) {
    if (matches.length === 2) {
      const endDate = new Date(matches[1]);
      return endDate > today;
    } else if (matches.length === 1) {
      const endDate = new Date(matches[0]);
      return endDate > today;
    } else if (matches.length > 2) {
      const endDate = new Date(matches[1]);
      return endDate >= today;
    }
  }
  return true;
}
