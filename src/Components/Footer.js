import React from 'react';
import styled from 'styled-components';
import { MdKeyboardVoice as Speaker } from "react-icons/md";

import {headerBackground as speakerBack, light as speakerColor} from '../colors';

export const Container = styled.div`
  position: absolute;
  bottom: 5px;
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  img {
    width: 258px;
    height: 46px;
    border-radius: 23px;
  }
  div {
    margin-left: 10px;
    height: 46px;
    width: 46px;
    background-color: ${speakerBack};
    border-radius: 50%;
    /* color: #f4ffff; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

// import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <img src="/img/text-bar.png" alt=""/>
      <div>
        <Speaker size={24} fill={speakerColor} />
      </div>
    </Container>
  );
}
