import React from 'react';
import { ModalOverlay, ModalContent, CloseButton, ImageContainer, ImageDetails, DetailItem } from './ImageModal.styles';
function ImageModal({ image, onClose }) {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ImageContainer>
          <img src={image.largeImageURL} alt={image.tags} />
        </ImageContainer>
        <ImageDetails>
          <DetailItem>
            <h3>Views</h3>
            <p>{image.views.toLocaleString()}</p>
          </DetailItem>
          <DetailItem>
            <h3>Downloads</h3>
            <p>{image.downloads.toLocaleString()}</p>
          </DetailItem>
          <DetailItem>
            <h3>Collections</h3>
            <p>{image.collections.toLocaleString()}</p>
          </DetailItem>
          <DetailItem>
            <h3>Likes</h3>
            <p>{image.likes.toLocaleString()}</p>
          </DetailItem>
          <DetailItem>
            <h3>Tags</h3>
            <p>{image.tags}</p>
          </DetailItem>
          <DetailItem>
            <h3>User</h3>
            <p>{image.user}</p>
          </DetailItem>
        </ImageDetails>
      </ModalContent>
    </ModalOverlay>
  );
}

export default ImageModal; 