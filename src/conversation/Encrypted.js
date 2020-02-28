import React from 'react';
import { FaLock } from "react-icons/fa";
import styled from 'styled-components';

import { yellowBox, yellowText } from '../colors';
import {Container as Base} from './Style';

const Container = styled(Base)`
  background-color: ${yellowBox};
  color: ${yellowText};
  text-align: center;
`;

export default function Encrypted({type}) {
  const values = {
    person: 'As mensagens e chamadas desta conversa estão protegidas com a criptografia de ponta a ponta. Toque para mais informações.',
    group: 'As mensagens enviadas a este grupo agora estão protegidas com a criptografia de ponta a ponta. Toque para obter mais informações.',
  };
  return (
    <Container><FaLock size={10} fill={yellowText}/> {values[type]}</Container>
  );
}
