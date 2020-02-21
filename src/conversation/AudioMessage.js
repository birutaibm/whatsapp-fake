import React from 'react';
import styled from 'styled-components';
import { MdKeyboardVoice } from "react-icons/md";
import { FaPlay } from "react-icons/fa";

import MessageFooter from './MessageFooter';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 300px;
  max-width: 100%;
  .person {
    position: relative;
    margin-right: 10px;
    span {
      position: absolute;
      bottom: 0px;
      right: 0px;
      svg {
        fill: ${props => props.listened ? 'blue' : '#666'};
      }
    }
  }
  .controll {
    margin: 10px;
    svg {
      fill: #666;
    }
  }
  .content {
    flex: 1;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      div {
        color: #666;
        font-size: 10px;
      }
    }
  }
`;

export default function AudioMessage({audio, time, status}) {
  const sec = audio.duration % 60;
  const min = (audio.duration - sec) / 60;
  const duration = min + ':' + ((sec<10) ? '0'+sec : sec);
  if (audio.listened) {
    status = 'read';
  }

  return (
    <Container listened={audio.listened}>
      <div className="person">
        <img className="logo" src="/img/person.png" alt=""/>
        <span><MdKeyboardVoice size={15} /></span>
      </div>
      <div className="controll"><FaPlay size={20} /></div>
      <div className="content">
        <div></div>
        <div>
          <svg height="10px" width="100%">
            <line x1="0" x2="100%" y1="50%" y2="50%" strokeWidth="2" stroke="#999"/>
            <circle cx="5" cy="5" r="5" fill="#666" />
          </svg>
        </div>
        <div>
          <div>{duration}</div>
          <div>
            <MessageFooter time={time} status={status} />
          </div>
        </div>
      </div>
    </Container>
  );
}
