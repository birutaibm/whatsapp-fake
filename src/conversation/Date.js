import React from 'react';
import styled from 'styled-components';

import { blueBox, blueText } from '../colors';
import {Container as Base} from './Style';

const Container = styled(Base)`
  background-color: ${blueBox};
  color: ${blueText};
  text-transform: uppercase;
`;

export default function Date({value}) {
  return (
    <Container>{value}</Container>
  );
}
