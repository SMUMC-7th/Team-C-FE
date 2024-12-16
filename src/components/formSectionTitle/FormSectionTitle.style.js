import styled from 'styled-components';

const SectionTitle = styled.div`
  display: flex;
  align-items: start;
  font-size: 12px;
`;

const Title = styled.p`
  color: var(--color-gray-500);
`;

const Asterisk = styled.p`
  color: var(--color-red-700);
`;

const Additional = styled.p`
  font-size: 10px;
  color: var(--color-gray-400);
  padding-top: 2px;
  margin-left: 10px;
`;

export { SectionTitle, Title, Asterisk, Additional };
