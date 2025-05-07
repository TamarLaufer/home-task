import React from 'react';
import { HeaderContainer, Button, CategoryButton } from './Header.styles';

function Header({ onPrevPage, onNextPage, onCategoryClick }) {
  return (
    <HeaderContainer>
      <Button onClick={onPrevPage}>Prev</Button>
      <CategoryButton onClick={onCategoryClick}>
        Select Category
      </CategoryButton>
      <Button onClick={onNextPage}>Next</Button>
    </HeaderContainer>
  );
}

export default Header; 