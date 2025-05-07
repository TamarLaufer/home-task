import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
`;

export const ImageContainer = styled.div`
  margin-bottom: 20px;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 4px;
  }
`;

export const ImageDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`;

export const DetailItem = styled.div`
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 4px;
  
  h3 {
    margin: 0 0 5px 0;
    font-size: 14px;
    color: #666;
  }
  
  p {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: white;
`;