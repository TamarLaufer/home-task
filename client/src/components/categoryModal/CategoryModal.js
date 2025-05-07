import React from 'react';
import { ModalOverlay, ModalContent, CloseButton, CategoryList, CategoryButton } from './CategoryModa.styles';

const categories = [
  'nature',
  'animals',
  'sports',
  'work',
  'food',
  'travel',
  'architecture',
  'technology',
  'art',
  'people'
];

function CategoryModal({ onClose, onSelect }) {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>Select Category</h2>
        <CategoryList>
          {categories.map(category => (
            <CategoryButton
              key={category}
              onClick={() => onSelect(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </CategoryButton>
          ))}
        </CategoryList>
      </ModalContent>
    </ModalOverlay>
  );
}

export default CategoryModal; 