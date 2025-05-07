import React from 'react';
import { MessageContainer } from './StatusMessage.styles';

function StatusMessage({ type, message }) {
  return (
    <MessageContainer type={type}>
      {message}
    </MessageContainer>
  );
}

export default StatusMessage; 