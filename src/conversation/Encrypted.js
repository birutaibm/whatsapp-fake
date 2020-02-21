import React from 'react';
import { FaLock } from "react-icons/fa";

// import { Container } from './styles';
import './Encrypted.css';

export default function Encrypted({type}) {
  const values = {
    person: 'As mensagens e chamadas desta conversa estão protegidas com a criptografia de ponta a ponta. Toque para mais informações.',
    group: 'As mensagens enviadas a este grupo agora estão protegidas com a criptografia de ponta a ponta. Toque para obter mais informações.',
  };
  return (
    <div className="encrypted"><FaLock size={10}/> {values[type]}</div>
  );
}
