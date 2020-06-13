import React from 'react';
import styled from 'styled-components';
import Navbar from '@organisms/Navbar';
import Hero from '@organisms/Hero';

const Wrapper = styled.div``;

export const Index = () => {
  return (
    <Wrapper>
      <Navbar></Navbar>
      <Hero></Hero>
    </Wrapper>
  );
};
export default Index;
