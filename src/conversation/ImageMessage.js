import React, {Fragment} from 'react';
import styled from 'styled-components';

import { dark, light } from '../colors';
import TextMessage from './TextMessage';
import MessageFooter from './MessageFooter';

const Container = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  overflow: hidden;
  img {
    margin-left: 50%;
    margin-top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
  .absolute {
    position: absolute;
    bottom: 0px;
    right: 0px;
  }
  .image-cover {
    position: absolute;
    top: 0px;
    left: 0px;
  }
`;

export default function ImageMessage({message}) {
  return message.text ? (
    <Fragment>
      <Container>
        <img src={message.image} alt=""/>
      </Container>
      <TextMessage
        text={message.text}
        time={message.time}
        status={message.status}
      />
    </Fragment>
  ) : (
    <Container>
      <img src={message.image} alt=""/>
      <div className="image-cover">
        <svg width="100%" height="100%">
          <defs>
          <radialGradient id="grad1" cx="85%" cy="95%" r="30%">
            <stop offset="0%" style={{stopColor:dark,stopOpacity:0.5}} />
            <stop offset="100%" style={{stopColor:dark,stopOpacity:0}} />
          </radialGradient>
          </defs>
          <rect x='0' y='0' width="100%" height="100%" fill="url(#grad1)" />
        </svg>
      </div>
      <div className="absolute">
        <MessageFooter 
          color={light}
          time={message.time}
          status={message.status}
        />
      </div>
    </Container>
  );
}
