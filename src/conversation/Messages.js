import React from 'react';
import styled from 'styled-components';

import Message from './Message';
import AudioMessage from './AudioMessage';
import TextMessage from './TextMessage';
import ImageMessage from './ImageMessage';

const Container = styled.div`
  max-width: 75%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`;

export default function Messages({author='myself', value=[]}) {

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
      <Message author={author} key={key} first={key === 0}>
        {content}
      </Message>
    );
  }

  return (
    <Container>
      {value.map(renderMessage)}
    </Container>
  );
}
