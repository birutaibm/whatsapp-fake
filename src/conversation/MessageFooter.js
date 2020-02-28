import React from 'react';
import styled from 'styled-components';
import { MdDone, MdDoneAll } from 'react-icons/md';
import { GoClock } from "react-icons/go";

import { consumed, gray } from '../colors';

const Container = styled.span`
  color: ${props => props.color};
  font-size: 10px;
  margin-left: 10px;
  margin-right: 1px;
  margin-top: 1px;
  float: right;
  span {
    color: ${props => props.read ? consumed : props.color};
    svg {
      fill: ${props => props.read ? consumed : props.color};
    }
  }
`;

export default function MessageFooter({ time, status='', color=gray}) {
  const icons = {
    sending: (<GoClock size={10} fill={color} />),
    send: (<MdDone size={10} fill={color} />),
    deliver: (<MdDoneAll size={10} fill={color} />),
    read: (<MdDoneAll size={10} fill={consumed} />),
  };
  const icon = icons[status] || null;

  return (
    <Container color={color} read={status==='read'}>
      {time} <span>{icon}</span>
    </Container>
  );
}
