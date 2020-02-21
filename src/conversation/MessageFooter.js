import React from 'react';
import styled from 'styled-components';
import { MdDone, MdDoneAll } from 'react-icons/md';
import { GoClock } from "react-icons/go";

const Container = styled.span`
  color: ${props => props.color};
  font-size: 10px;
  margin-left: 10px;
  margin-right: 1px;
  margin-top: 1px;
  float: right;

  svg {
    fill: ${props => props.color};
  };

  .read svg {
    fill: blue;
  }
`;
const icons = {
  sending: (<GoClock size={10} />),
  send: (<MdDone size={10} />),
  deliver: (<MdDoneAll size={10} />),
  read: (<MdDoneAll size={10} />),
};

export default function MessageFooter({ time, status='', color='#666'}) {
  const icon = icons[status] || null;
  status = icon ? 
      (<span className={status}>{icon}</span>) : 
      null;

  return (
    <Container color={color}>
      {time} {status}
    </Container>
  );
}
