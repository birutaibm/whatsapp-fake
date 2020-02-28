import React from 'react';
import styled from 'styled-components';
import {Container as Base} from './Style';
import { myBackground, otherBackground } from '../colors';

const BaseMessage = styled(Base)`
  margin-left: 0px;
  margin-right: 0px;
  max-width: 100%;
  background-color: ${props => props.mine ? myBackground : otherBackground};
  direction: ltr;
`;
const FirstMessage = styled(BaseMessage)`
  margin-top: 0px;
  margin-bottom: 0px;
`;
const MyFirst = styled(FirstMessage)`
  border-top-right-radius: 0px;
`;
const OthersFirst = styled(FirstMessage)`
  border-top-left-radius: 0px;
`;

export default function Message({author='myself', first=false, ...props}) {
  const mine = (author === 'myself');
  return first ? (
    mine ? (
      <MyFirst mine={true} {...props} />
    ) : (
      <OthersFirst {...props} />
    )
  ) : (
    <BaseMessage mine={mine} {...props} />
  );
}