import * as S from './ToggleBtnGroup.style';
import { ToggleBtn } from './ToggleBtn';
import { useState } from 'react';
import { FormSectionTitle } from '../formSectionTitle/FormSectionTitle';

function ToggleBtnGroup({ formMenu, onToggleChange }) {
  const [toggles, setToggles] = useState(
    formMenu.map((item) => Array(item.options.length).fill(false))
  );

  const handleToggle = (menuIdx, optionIdx) => {
    const selectedCount = toggles[menuIdx].filter((toggle) => toggle).length;
    const isSelected = toggles[menuIdx][optionIdx];
    const maxSelections = formMenu[menuIdx].maxSelections;

    if (!isSelected && selectedCount >= maxSelections) {
      alert(`최대 ${maxSelections}개까지 선택할 수 있습니다.`);
      return;
    }

    setToggles((prevToggles) => {
      const newToggles = [...prevToggles];
      newToggles[menuIdx][optionIdx] = !newToggles[menuIdx][optionIdx];
      onToggleChange(newToggles);
      return newToggles;
    });
  };

  return (
    <S.Container>
      {formMenu.map((item, menuIdx) => (
        <S.Section key={item.id}>
          <FormSectionTitle title={item.title} additional={item.additional} />
          <S.Ul>
            {item.options.map((option, optionIdx) => (
              <S.Li key={optionIdx}>
                <ToggleBtn
                  onClick={() => handleToggle(menuIdx, optionIdx)}
                  isSelected={toggles[menuIdx][optionIdx]}
                  value={option}
                />
              </S.Li>
            ))}
          </S.Ul>
        </S.Section>
      ))}
    </S.Container>
  );
}

export { ToggleBtnGroup };
