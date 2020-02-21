import React from 'react';

// import { Container } from './styles';
import './MyMessage.css';
import AudioMessage from './AudioMessage';
import TextMessage from './TextMessage';
import ImageMessage from './ImageMessage';

export default function MyMessage({value=[]}) {

  function renderMessage(message={}, key) {
    let content = null;
    if (message.audio) {
      content = (
        <AudioMessage
          audio={message.audio}
          time={message.time}
          status={message.status}
        />
      );
    } else if (message.image) {
      content = (
        <ImageMessage message={message} />
      );
    } else {
      content = (
        <TextMessage
          text={message.text}
          time={message.time}
          status={message.status}
        />
      );
    }

    return (
      <div className="my-message" key={key}>
        {content}
      </div>
    );
  }

  return (
    <div className="my-messages-container">
      <div className="my-messages">
        {value.map(renderMessage)}
      </div>
      <svg width={10} height={10}>
        <line x1='0' x2='10' y1='10' y2='0' stroke='rgba(0, 0, 0, 0.3)' strokeWidth={2} />
        <polygon points="-2,0 10,0 -2,12" />
      </svg>
    </div>
  );
}
