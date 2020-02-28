import React from 'react';
import styled from 'styled-components';

import Messages from './Messages';
import MessagesCorner from './MessagesCorner';

const Container = styled.div`
  margin: 5px 20px 1px;
  width: 95%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  direction: ${props => props.mine ? 'ltr' : 'rtl'};
`;

export default function MessagesContainer({author='myself', value=[]}) {
  const mine = (author === 'myself');
  return (
    <Container mine={mine}>
      <Messages author={author} value={value} />
      <MessagesCorner mine={mine} />
    </Container>
  );
}
