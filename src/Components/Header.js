import React from 'react';
import styled from 'styled-components';
import { MdArrowBack, MdMoreVert, MdCall } from "react-icons/md";
import { FaVideo } from "react-icons/fa";

import {headerBackground, light as iconColor} from '../colors';
import Logo from './Logo';

const Container = styled.header`
  background-color: ${headerBackground};
  height: 56px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${iconColor};
  * {
    margin: 5px;
  }
  div {
    flex: 1;
    font-family: sans-serif;
    .name {
      font-weight: bold;
      font-size: 16px;
      margin: 1px;
    }
    .description {
      font-size: 12px;
      margin: 1px;
    }
  }
`;

export default function Header() {
  return (
    <Container>
      <MdArrowBack size={24} fill={iconColor} />
      <Logo />
      <div>
        <div className="name">Rafael Arantes</div>
        <div className="description">online</div>
      </div>
      <FaVideo size={24} fill={iconColor} />
      <MdCall size={24} fill={iconColor} />
      <MdMoreVert size={24} fill={iconColor} />
    </Container>
  );
}
