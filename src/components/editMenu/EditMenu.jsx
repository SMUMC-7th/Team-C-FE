import * as S from './EditMenu.style';
import { useState } from 'react';

const EditMenu = ({ onEdit, onDelete }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <S.MenuContainer>
      <S.MenuIcon onClick={toggleMenu} />
      {isMenuOpen && (
        <S.Menu onMouseLeave={closeMenu}>
          <S.MenuItem1 onClick={onEdit}>수정하기</S.MenuItem1>
          <S.MenuItem2 onClick={onDelete}>삭제하기</S.MenuItem2>
        </S.Menu>
      )}
    </S.MenuContainer>
  );
};

export default EditMenu;
