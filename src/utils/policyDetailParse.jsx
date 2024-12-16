export function getSafeValue(value) {
  return value && value !== '-' && value !== 'null' ? value : '-';
}
export function parseLinks(text) {
  if (!text || text === '-') {
    return '-';
  }

  const urlRegex = /(https?:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/[^\s]*)?)/g;
  const parts = text.split(urlRegex);

  return parts.map((part, index) =>
    urlRegex.test(part) ? (
      <a key={index} href={part} target="_blank" rel="noopener noreferrer">
        {part}
      </a>
    ) : (
      part
    )
  );
}
