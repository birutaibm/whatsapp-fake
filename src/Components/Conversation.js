import React from 'react';
import styled from 'styled-components';
import Date from '../conversation/Date';
import Encrypted from '../conversation/Encrypted';
import MessagesContainer from '../conversation/MessagesContainer';

const Container = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 61px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-x: auto;
  ::-webkit-scrollbar {
    width: 3px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: rgba(255,255,255,0); 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,0); 
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background: rgba(0,0,0,0.5); 
  }
`;

export default function Conversation({partiner='person'}) {
  const myMessages = [{
    text: 'linha 1',
    time: '10:10',
    status: 'read',
  }, {
    text: 'linha 2 \n linha 3 que é mais longa',
    time: '10:15',
    status: 'deliver',
  }, {
    audio: {
      duration: 3*60+20, // in seconds
      listened: true, // default is false
    },
    time: '10:16',
    status: 'send',
  }, {
    //text: 'l 5',
    time: '10:19',
    status: 'sending',
    image: '/img/example.jpeg',
  }, {
    text: 'linha 6 \nJunto com um texto bem mais longo do que o que seria normal...',
    time: '10:20',
//    status: 'sending',
  }];
  const conversation = [{
    encrypted: true,
  }, {
    date: 'Hoje',
  }, {
    author: 'myself',
    messages: myMessages,
  }, {
    date: 'Amanhã',
  }, {
    author: 'partner',
    messages: myMessages,
  }];

  return (
    <Container>
      {conversation.map((item, index) => {
        if (item.encrypted) {
          return (<Encrypted key={index} type={partiner} />);
        } else if (item.date) {
          return (<Date key={index} value={item.date} />);
        } else {
          return (<MessagesContainer key={index} author={item.author} value={item.messages} />);
        }
      })}
    </Container>
  );
}
