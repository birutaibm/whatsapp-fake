import React from 'react';
import styled from 'styled-components';
import { MdKeyboardVoice } from "react-icons/md";
import { FaPlay } from "react-icons/fa";

import { gray, lightGray, consumed } from '../colors';
import MessageFooter from './MessageFooter';
import Logo from '../Components/Logo';

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
      color: ${props => props.listened ? consumed : gray};
      svg {
        fill: ${props => props.listened ? consumed : gray};
      }
    }
  }
  .controll {
    margin: 10px;
    color: ${gray};
    svg {
      fill: ${gray};
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
        color: ${gray};
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

  const speakerColor = audio.listened ? consumed : gray;
  return (
    <Container listened={audio.listened}>
      <div className="person">
        <Logo />
        <span>
          <MdKeyboardVoice size={15} fill={speakerColor} />
        </span>
      </div>
      <div className="controll"><FaPlay size={20} fill={gray} /></div>
      <div className="content">
        <div></div>
        <div>
          <svg height="10px" width="100%">
            <line x1="0" x2="100%" y1="50%" y2="50%" strokeWidth="2" stroke={lightGray}/>
            <circle cx="5" cy="5" r="5" fill={gray} />
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
