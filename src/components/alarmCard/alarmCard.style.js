import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 68px;
  max-width: var(--size-inner-max-width);
  min-width: var(--size-min-width);
  gap: 8px;
  padding: 5px;
  border-bottom: 1px solid var(--color-gray-300);
  justify-content: center;
`;
const Title = styled.div`
  display: flex;
  width: 100%;
  font-size: 15px;
  font-weight: bold;
  color: black;
`;
const Content = styled.div`
  display: inline-block;
  flex-shrink: 0;
  width: 100%;
  flex-wrap: nowrap;
  overflow: hidden;
  font-size: 11px;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 800;
  color: var(--color-gray-600);
`;

export { Container, Title, Content };
