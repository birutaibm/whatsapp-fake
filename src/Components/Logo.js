import React from 'react';
import styled from 'styled-components';

const Container = styled.img`
  margin-left: 0px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
`;

export default function Logo({src='/img/person.png'}) {
  return (
    <Container src={src} alt="" />
  );
}
