import React from 'react';

// import { Container } from './styles';
import MessageFooter from './MessageFooter';

export default function TextMessage({text, time, status}) {
  const lines = text.split('\n');
  for (let i = lines.length-1; i > 0; i--) {
    lines.splice(i,0,(<br key={i} />));
  }

  return (
    <div>
    {lines}
    <MessageFooter 
      time={time}
      status={status}
    />
  </div>
);
}
