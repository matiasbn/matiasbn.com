import React from 'react';
import styled from 'styled-components';
import Navbar from '@organisms/Navbar';
import Hero from '@organisms/Hero';
import { breakpoints } from '@utils';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 10vh 90vh;
`;

const NavbarContainer = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
`;

const HeroContainer = styled.div`
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Index = () => {
  return (
    <Wrapper>
      <NavbarContainer>
        <Navbar></Navbar>
      </NavbarContainer>
      <HeroContainer>
        <Hero></Hero>
      </HeroContainer>
    </Wrapper>
  );
};
export default Index;
