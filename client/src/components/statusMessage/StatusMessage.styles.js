import styled from 'styled-components';

export const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  font-size: 1.2rem;
  color: ${props => props.type === 'error' ? '#dc3545' : '#007bff'};
`;