import { styled } from 'styled-components';

const ToggleBtn = styled.button`
  padding: 10px 12px;
  border: none;
  background-color: ${(props) =>
    props.$isSelected ? 'var(--color-blue-700)' : 'var(--color-gray-100)'};
  color: ${(props) => (props.$isSelected ? 'white' : 'var(--color-gray-600)')};
  font-size: 12px;
  border-radius: 14px;
  white-space: nowrap;
  transition: background-color 0.2s ease;
`;

export { ToggleBtn };
