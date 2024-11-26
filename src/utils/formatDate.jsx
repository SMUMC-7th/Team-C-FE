import { format } from 'date-fns';

export const formatDateRange = (dateRange) => {
  try {
    const [start, end] = dateRange.split('~', 2).map((date) => date.trim());
    return (
      <>
        {format(new Date(start), 'yyyy년 M월 d일')}
        <br />~ {format(new Date(end), 'yyyy년 M월 d일')}
      </>
    );
  } catch (error) {
    return dateRange;
  }
};

export function extractSubstring(text) {
  if (!text) return '-';
  const keyword1 = '신청기간:';
  const keyword2 = '~';

  const keywordIndex1 = text.indexOf(keyword1);
  const keywordIndex2 = text.indexOf(keyword2);

  if (keywordIndex1 !== -1) {
    const newText = text.slice(keywordIndex1 + 5);
    return newText;
  } else if (keywordIndex2 === -1) {
    const newText = text;
    return newText;
  } else {
    const newText = text.slice(0, 21);
    return formatDateRange(newText);
  }
}
